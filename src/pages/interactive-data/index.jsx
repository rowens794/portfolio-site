import Head from 'next/head'

import { Container } from '@/components/Container'
import InteractiveData from '@/components/InteractiveData'
import { Hero } from '@/components/DataHeader'

export default function Home() {
  return (
    <>
      <Head>
        <title>Ryan Owens</title>
        <meta
          name="description"
          content="I’m Ryan, an investor/software developer based in Charleston, WV."
        />
      </Head>

      <Container className="mt-9" id="me">
        <Hero />
      </Container>

      <Container className="mt-24" id="articles">
        <InteractiveData />
      </Container>
    </>
  )
}
