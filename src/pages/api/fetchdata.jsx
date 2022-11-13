export default async function handler(req, res) {
  const response = await fetch(
    'https://api.bls.gov/publicAPI/v2/timeseries/data',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        seriesid: ['CUUR0000SA0'],
        startyear: '2010',
        endyear: new Date().getFullYear().toString(),
        registrationkey: process.env.BLS_KEY,
      }),
    }
  )

  const data = await response.json()

  res.status(200).json({ name: 'John Doe' })
}
