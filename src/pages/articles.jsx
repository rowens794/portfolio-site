import Head from 'next/head'
import { createClient } from 'next-sanity'

import { Container } from '@/components/Container'
import MyThoughts from '@/components/MyThoughts'
import { Hero } from '@/components/ArticleHeader'

export default function Home(posts) {
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

      <Container className="mt-12" id="articles">
        <MyThoughts posts={posts.posts} />
      </Container>
    </>
  )
}

const client = createClient({
  projectId: '7whzdeur',
  dataset: 'production',
  apiVersion: '2022-11-06',
  useCdn: false,
})

export async function getStaticProps() {
  const posts = await client.fetch(`*[_type == "post"]`)

  return {
    props: {
      posts,
    },
  }
}
