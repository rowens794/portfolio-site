import Head from 'next/head'

import { Container } from '@/components/Container'
import Projects from '@/components/Projects'
import MyThoughts from '@/components/My Thoughts'
import { Work } from '@/components/WorkExp'
import { Education } from '@/components/Education'
import { OtherExp } from '@/components/OtherExperience'
import { PreferredTech } from '@/components/PreferredTech'
import { Hero } from '@/components/Hero'
import { DownloadCV } from '@/components/DownloadCV'
import { ExperienceWriteup } from '@/components/ExperienceWriteup'

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

      <Container className="mt-24" id="projects">
        <MyThoughts />
      </Container>

      <Container className="mt-24" id="projects">
        <Projects />
      </Container>

      <Container className="mt-24 md:mt-28" id="experience">
        <h2 className="relative z-10 ml-8 inline-block bg-white px-2 text-2xl font-bold tracking-tight text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 sm:text-3xl">
          Professional Experience
        </h2>
        <hr className="relative z-0 mb-16 -translate-y-4 border border-teal-500" />

        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <ExperienceWriteup />
          <div className="space-y-10 lg:pl-16 xl:pl-24">
            <DownloadCV />
            <Work />
            <Education />
            <OtherExp />
          </div>
        </div>
      </Container>

      <Container className="mt-12">
        <PreferredTech />
      </Container>
    </>
  )
}
