import React from 'react'

import { Container } from '@/components/Container'

export default function inflation() {
  return (
    <div className="mt-12">
      <Container>
        <p>Interactive Data</p>
      </Container>
    </div>
  )
}

//get server side props

const getServerSideProps = async () => {
  const res = await fetch('http://localhost:3000/api/fetchdata')
  const data = await res.json()

  return {
    props: {
      data,
    },
  }
}
