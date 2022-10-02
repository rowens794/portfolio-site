import Head from 'next/head'

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
        a.download = 'resume.pdf'
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
          <h1 className="text-center text-3xl text-slate-800 dark:text-slate-300 print:mb-2 print:text-2xl">
            Ryan Owens
          </h1>

          <div className="text-center  text-sm text-slate-800 dark:text-slate-300 print:text-xs print:leading-4">
            <span>(304) 231-7428</span>
            <span className="mx-2">|</span>
            <span>rowens794@gmail.com</span>
          </div>

          <div className="text-center text-sm text-slate-800 dark:text-slate-300 print:text-xs print:leading-4">
            <span>
              <a href="https://www.ryanjowens.com">www.ryanjowens.com</a>
            </span>
            <span className="mx-2 hidden print:inline-block sm:inline-block">
              |
            </span>
            <span>
              <a
                className="block print:inline-block sm:inline-block"
                href="https://github.com/rowens794"
              >
                github.com/rowens794
              </a>
            </span>
          </div>

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
              'Google Cloud',
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

          <SectionHeading title="Career Objective" />
          <CareerObjective text="Motivated professional with extensive leadership and client management experience transitioning to software development. Looking to leverage strong soft and financial skills to become part of a team focused on building great products. Self-learner who has experience transforming ideas into products that have generated value for 10s of thousands of monthly visitors." />

          <SectionHeading title="Development Experience" />
          <Position
            titles={['Founder / Full Stack Developer']}
            company="Intellispect"
            link="www.intellispect.co"
            location="Charleston, WV"
            dates={['Jun 2020 - Present']}
            bullets={[
              'Launched a SaaS product to help service providers identify nonprofits customers',
              'Created a data aggregation pipeline with Node.js & Express to automate monthly collection, parsing, cleaning and storage of data for 1.7 million nonprofit organizations on MongoDB & AWS S3 ',
              'Built React/Next.js frontend handling authentication, payment processing, and general application functionality',
              'Grew the product to ~25k monthly visitors, thousands of registered users, generating $50k+ in revenue',
            ]}
          />

          {/* 
          <SectionHeading title="Personal Projects" />
          <Project
            name="Zilch"
            desc="Multi-player Online Dice Game"
            link="www.dontzilch.com"
            github="github.com/rowens794/zilch"
            bullets={[
              'Real-time multi-player dice game using React, Next.js, Node.js, Express, and SQL',
              'Game allows up to 8 players on separate devices to play inside of a private game room',
              'No user authentication is required to create or join a game',
            ]}
          /> */}

          <SectionHeading title="Other Professional Experience" />
          <Position
            titles={['SVP & Inst. Inv. Manager']}
            company="BB&T (now Truist Bank)"
            location="Charleston, WV"
            dates={['Sep 2016 – Jun 2020']}
            bullets={[
              'Served as a team leader managing investment portfolios for nonprofit clients, overseeing $750 million in assets',
              'Regularly hosted organization boards/committees and led discussions on investment strategy, performance, and client service',
              'Developed internal tooling (Excel/VBA) to automate and streamline outside investment manager vetting and portfolio review process',
            ]}
          />

          <Position
            titles={['VP & Dir. of Inv.']}
            company="United Bank, Inc."
            location="Charleston, WV"
            dates={['Jun 2010 – Sep 2016']}
            bullets={[
              'Managed an investment department of ten investment analysts and portfolio managers with responsibility for $1.5 billion in client assets',
              'Oversaw division-wide portfolio construction process and incorporated innovative tooling to improve efficiency and accuracy of staff',
              'Regularly interacted and documented due diligence meetings with 3rd party investment managers and conveyed findings to team and clients through written and verbal reports',
              'Developed automated tooling (Excel/VBA) to analyze and identify at-risk assets in the department',
            ]}
          />

          <SectionHeading title="Education & Professional Designations" />
          <EducationLine
            school="West Virginia University"
            degree="MS Finance"
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
          <EducationLine
            school="CFA Charterholder"
            degree="Pittsburgh Chapter Member"
            dates="Jun 2014"
          />
        </div>
      </Container>
    </>
  )
}

const SectionHeading = ({ title }) => {
  return (
    <div className="mt-8 mb-4 w-full border-b border-slate-900 dark:border-slate-200 print:mt-5 print:mb-1 ">
      <span className="Sept block text-base font-bold text-slate-900 dark:text-slate-300 print:text-base print:leading-5 sm:text-lg">
        {title}
      </span>
    </div>
  )
}

const Project = ({ name, desc, link, github, bullets }) => {
  return (
    <div className="mb-8 print:mb-3">
      <ProjectHeading name={name} desc={desc} github={github} link={link} />
      <PositionDescription bullets={bullets} />
    </div>
  )
}

const ProjectHeading = ({ name, desc, link, github }) => {
  return (
    <div className="flex justify-between">
      <div>
        <span className="block text-sm font-semibold text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base">
          {name}
        </span>
        <span className="block text-sm italic text-slate-800 dark:text-slate-300 print:text-sm print:leading-4 sm:text-base">
          {desc}
        </span>
      </div>

      <div>
        <span className="block text-right text-xs text-slate-800 dark:text-slate-300 print:text-xs print:leading-4 sm:text-sm">
          <a href={`https://${link}`}>{link}</a>
        </span>
        <span className="block text-right text-xs text-slate-800 dark:text-slate-300 print:text-xs print:leading-4 sm:text-sm">
          <a href={`https://${link}`}>{github}</a>
        </span>
      </div>
    </div>
  )
}

const Position = ({ company, titles, link, location, dates, bullets }) => {
  return (
    <div className="mb-8 print:mb-3">
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
            <a href={`https://${link}`}>{link}</a>
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
    <div className="mb-2 flex justify-between print:mb-0 print:text-sm print:leading-3 sm:mb-0">
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
    <div className="mb-2 w-full flex-row text-slate-800 dark:text-slate-300 print:flex print:text-base sm:mb-0 sm:flex">
      <p className="mr-2 inline-block w-28 shrink-0 whitespace-nowrap text-sm font-bold print:text-sm print:leading-4 sm:text-base">
        {title}:
      </p>
      <div className="lead flex flex-wrap">
        {skills.map((item, i) => {
          return (
            <p
              className="mr-1 inline-block whitespace-nowrap text-sm font-normal print:mr-1 print:leading-4 sm:mr-2 sm:text-base"
              key={i}
            >
              {item}
              {i < skills.length - 1 ? ',' : ''}
            </p>
          )
        })}
      </div>
    </div>
  )
}

const CareerObjective = ({ text }) => {
  return (
    <div className="ml-2 mt-2 print:mt-1 sm:ml-4">
      <p className="flex gap-1 text-sm leading-5 text-slate-800 dark:text-slate-400 print:text-sm print:leading-4 sm:gap-2 sm:text-base sm:leading-6">
        {text}
      </p>
    </div>
  )
}
