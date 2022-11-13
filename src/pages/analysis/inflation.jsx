import React from 'react'

import { Container } from '@/components/Container'

export default function inflation() {
  //perform a fetch request to get inflation data from the BLS api
  const fetchData = async () => {
    const data = await response.json()
    console.log(data.Results.series[0].data)
  }

  fetchData()

  return (
    <Container className="mt-24" id="articles">
      <p>Analysis</p>
    </Container>
  )
}
