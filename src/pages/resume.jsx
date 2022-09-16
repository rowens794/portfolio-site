import Head from 'next/head'
import { jsPDF } from 'jspdf'

import { Container } from '@/components/Container'

export default function Home() {
  const downloadResume = () => {
    fetch('/resume.pdf')
      .then((resp) => resp.blob())
      .then((blob) => {
        const url = window.URL.createObjectURL(blob)
        const a = document.createElement('a')
        a.style.display = 'none'
        a.href = url
        // the filename you want
        a.download = 'Ryan Owens Resume.pdf'
        document.body.appendChild(a)
        a.click()
        window.URL.revokeObjectURL(url)
      })
      .catch(() => alert('There was an error downloading the resume.'))
  }

  return (
    <>
      <Head>
        <title>Ryan Owens - Resume</title>
        <meta name="description" content="Ryan Owens - Resume" />
      </Head>

      <Container className="relative mt-12 print:mt-0" id="resume">
        <div className="relative">
          <button
            onClick={() => downloadResume()}
            className="absolute top-0 right-0 hidden rounded-full bg-slate-600 px-3 py-0.5 text-sm text-slate-100 hover:bg-slate-700 print:hidden sm:block"
          >
            Save PDF
          </button>
          <h1 className="text-center text-3xl text-slate-800 dark:text-slate-300 print:mb-1 print:text-2xl">
            Ryan Owens
          </h1>
          <span className="block text-center text-sm text-slate-800 dark:text-slate-300 print:text-xs print:leading-4">
            4204 Staunton Ave Charleston, WV
          </span>
          <div className="text-center text-sm text-slate-800 dark:text-slate-300 print:text-xs print:leading-4">
            <span>(304) 231-7428</span>
            <span className="mx-2">|</span>
            <span>rowens794@gmail.com</span>
          </div>

          <SectionHeading title="Professional Experience" />
          <Position
            titles={['Founder / Product Lead']}
            company="Intellispect"
            link="https://www.intellispect.co"
            location="Charleston, WV"
            dates={['Jun 2021 - Present']}
            bullets={[
              'Built and launched a React/Express/MongoDB software product targeting sales teams that service non-profit clients',
              'Built a data aggregation pipeline covering 1.7 million non-profit organizations to facilitate regular database/product updates',
              'Grew the product to ~25k monthly visitor, thousands of free users, and dozens of paying customers',
              'Direct exposure to SEO optimization, digital marketing, and sales',
            ]}
          />

          <Position
            titles={['SVP & Inst. Inv. Manager']}
            company="BB&T (now Truist Bank)"
            location="Charleston, WV"
            dates={['Sep 2016 – Jun 2020']}
            bullets={[
              'Delivered managed investment services for large foundation and endowment clients',
              'Built and maintained VBA application to fetch and analyze client investment allocations',
              'Developed internal tooling to automate and streamline outside investment manager vetting process',
              'Oversaw nearly $1B in client assets across ~40 client relationships',
            ]}
          />

          <Position
            titles={[
              'VP & Dir. of Inv.',
              'Portfolio Manager',
              'Investment Analyst',
            ]}
            company="United Bank, Inc."
            location="Charleston, WV"
            dates={[
              'Mar 2015 – Sep 2016',
              'Oct 2012 – Mar 2015',
              'Jun 2010 – Oct 2012',
            ]}
            bullets={[
              'Developed and implemented monte carlo simulation model to evaluate and establish division wide investment allocations',
              'Developed automated tooling to analyze every asset held in the division to identify and flag at-risk assets to be sold',
              'Managed a team of ~10 investment analysts and portfolio managers',
              'Had primary responsibility ~$1.5B in client assets across ~750 HNW & institutional relationships',
            ]}
          />

          <Position
            titles={['Grad. Teaching Ast.']}
            company="West Virginia Univ."
            location="Morgantown, WV"
            dates={['Sep 2009 – Jun 2010']}
            bullets={[
              'Instructed a supplemental junior/senior level class on investment analysis and portfolio management',
            ]}
          />

          <SectionHeading title="Education & Professional Designations" />
          <EducationLine
            school="CFA Charterholder"
            degree="Pittsburgh Chapter Member"
            dates="Jun 2014"
          />
          <EducationLine
            school="West Virginia University"
            degree="MSF Finance"
            dates="Jun 2010"
          />
          <EducationLine
            school="West Virginia University"
            degree="BSBA Finance"
            dates="Dec 2008"
          />
          <EducationLine
            school="West Virginia University"
            degree="BSBA Accounting"
            dates="Dec 2008"
          />

          <SectionHeading title="Skills / Competencies" />
          <SkillsList
            title="Development"
            skills={[
              'Javascript',
              'TypeScript',
              'React',
              'Next.js',
              'Node.js',
              'Express',
              'MongoDB',
              'SQL',
              'AWS',
              'Python',
              'TailwindCSS',
              'CSS',
              'HTML',
            ]}
          />
          <SkillsList
            title="Software"
            skills={[
              'VS Code',
              'Git',
              'GitHub',
              'MS Office',
              'gSuite',
              'Trello',
              'Figma',
              'Adobe Creative Suite',
            ]}
          />
        </div>
      </Container>
    </>
  )
}

const SectionHeading = ({ title }) => {
  return (
    <div className="mt-8 mb-4 w-full border-b border-slate-900 dark:border-slate-200 print:mt-6 print:mb-2 ">
      <span className="Sept block text-base font-bold text-slate-900 dark:text-slate-300 print:text-base print:leading-5 sm:text-lg">
        {title}
      </span>
    </div>
  )
}

const Position = ({ company, titles, link, location, dates, bullets }) => {
  return (
    <div className="mb-8 print:mb-4">
      <PositionHeading
        titles={titles}
        company={company}
        link={link}
        location={location}
        dates={dates}
      />
      <PositionDescription bullets={bullets} />
    </div>
  )
}

const PositionHeading = ({ company, titles, link, location, dates }) => {
  return (
    <div className="flex justify-between">
      <div>
        <span className="block text-sm font-semibold text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base">
          {company}
        </span>
        {titles.map((title, i) => (
          <span
            key={i}
            className="block text-sm italic text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base"
          >
            {title}
          </span>
        ))}
        {link && (
          <span className="block text-sm italic text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base">
            <a href="https://www.intellispect.co">{link}</a>
          </span>
        )}
      </div>

      <div>
        <span className="block text-right text-sm font-semibold text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base">
          {location}
        </span>

        {dates.map((date, i) => (
          <span
            key={i}
            className="block text-right text-sm italic text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base"
          >
            {date}
          </span>
        ))}
      </div>
    </div>
  )
}

const PositionDescription = ({ bullets }) => {
  return (
    <div className="ml-2 mt-2 print:mt-1 sm:ml-4">
      <ul>
        {bullets.map((item, i) => (
          <li
            key={i}
            className="flex gap-1 text-sm leading-5 text-slate-800 dark:text-slate-400 print:text-sm print:leading-4 sm:gap-2 sm:text-base sm:leading-6"
          >
            <span className="">-</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}

const EducationLine = ({ school, degree, dates }) => {
  return (
    <div className="mb-2 flex justify-between print:mb-0 print:text-sm print:leading-4 sm:mb-0">
      <div>
        <span className="block text-sm font-semibold leading-5 text-slate-800 dark:text-slate-300 print:inline-block sm:inline-block sm:text-base sm:leading-6">
          {school}
        </span>
        <span className="mx-2 hidden print:inline-block sm:inline-block">
          |
        </span>
        <span className="block text-sm italic leading-5 text-slate-800 dark:text-slate-300 print:inline-block sm:inline-block sm:text-base sm:leading-6">
          {degree}
        </span>
      </div>

      <div>
        <span className="block text-right text-sm italic leading-5 text-slate-800 dark:text-slate-300 sm:text-base sm:leading-6">
          {dates}
        </span>
      </div>
    </div>
  )
}

const SkillsList = ({ title, skills }) => {
  return (
    <div className=" mb-2 w-full flex-row text-slate-800 dark:text-slate-300 print:flex print:text-base sm:mb-0 sm:flex">
      <span className="mr-2 w-28 shrink-0 whitespace-nowrap text-sm font-bold print:text-sm  sm:text-base">
        {title}:
      </span>
      <div className="flex flex-wrap">
        {skills.map((item, i) => {
          return (
            <span
              className="mr-1 whitespace-nowrap text-sm font-normal print:mr-2 sm:mr-2 sm:text-base"
              key={i}
            >
              {item}
              {i < skills.length - 1 ? ',' : ''}
            </span>
          )
        })}
      </div>
    </div>
  )
}
