const { MongoClient, ServerApiVersion } = require('mongodb')

const client = new MongoClient(process.env.MONGO, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
})

export default async function handler(req, res) {
  if (req.method === 'POST') {
    try {
      const { authorization } = req.headers

      if (authorization === `Bearer ${process.env.BLS_KEY}`) {
        await client.connect()
        const db = client.db()

        let dataseries = await retrieveBLSDataSeries()
        let documents = await createBLSDocuments(dataseries)
        await addDataPoints(client, documents)
        client.close()

        res.status(200).json({ success: true })
      } else {
        res.status(401).json({ success: false })
      }
    } catch (err) {
      res.status(500).json({ statusCode: 500, message: 'error' })
    }
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method Not Allowed')
  }
}

const addDataPoints = async (client, documents) => {
  return new Promise(async (res, rej) => {
    const collection = client
      .db('personal-site')
      .collection('EconomicDataPoint')

    let promises = []

    for (let i = 0; i < documents.length; i++) {
      promises.push(
        collection.findOneAndUpdate(
          { _id: documents[i]._id },
          { $set: documents[i] },
          {
            upsert: true, // insert the document if it does not exist
          }
        )
      )
    }

    await Promise.all(promises)

    res(null)
  })
}

const retrieveBLSDataSeries = async () => {
  return new Promise(async (res, rej) => {
    try {
      const response = await fetch(
        'https://api.bls.gov/publicAPI/v2/timeseries/data',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            seriesid: ['CUUR0000SA0', 'LES1252881600'],
            startyear: '1980',
            endyear: new Date().getFullYear().toString(),
            registrationkey: process.env.BLS_KEY,
          }),
        }
      )

      const data = await response.json()

      res(data.Results.series)
    } catch {
      rej(err)
    }
  })
}

const createBLSDocuments = async (dataseries) => {
  return new Promise((res, rej) => {
    let documents = []

    dataseries.forEach((series) => {
      let seriesID = series.seriesID
      series.data.forEach((doc) => {
        documents.push({
          _id: `${seriesID}-${doc.year}-${doc.period}`,
          seriesID: seriesID,
          year: parseInt(doc.year),
          period: parseInt(doc.period.slice(1, 3)),
          periodName: doc.periodName,
          value: parseFloat(doc.value),
        })
      })
    })

    res(documents)
  })
}
