import Head from 'next/head'
import { createClient } from 'next-sanity'

import { Container } from '@/components/Container'
import Projects from '@/components/Projects'
import MyThoughts from '@/components/My Thoughts'
import { Work } from '@/components/WorkExp'
import { Education } from '@/components/Education'
import { OtherExp } from '@/components/OtherExperience'
import { PreferredTech } from '@/components/PreferredTech'
import { Hero } from '@/components/ArticleHeader'
import { DownloadCV } from '@/components/DownloadCV'
import { ExperienceWriteup } from '@/components/ExperienceWriteup'

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

      <Container className="mt-24" id="articles">
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
