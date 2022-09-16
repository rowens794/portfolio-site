import React, { useState } from 'react'

const experiences = [
  {
    company: 'Intellispect',
    title: 'Founder / Product Lead',
    dates: '2020 - Present',
    targetID: 'intellispect',
    desc: [
      'After consistently facing issues identifying nonprofit prospects at Truist, another banker and I decided to leverage public data to create a product to eliminate this problem.  I would focus on building the platform, and he would focus on sales.',
      'Every month the IRS dumps about 50 GB of poorly structured data about nonprofits into the public domain.  While this dataset is rich, it is notoriously hard to work with.',
      'In early 2020, I built a data pipeline to automatically fetch data from multiple public repositories that the IRS manages, clean/normalize the data, and store it in either an S3 bucket or inside of a MongoDB deployment.',
      'While I was working on parsing the raw data, I was also building a user interface that would allow our users to generate business value from the dataset we constructed.  The interface provides faceted search and generates unique insights about the relationships between organizations, board members, and service providers for our customers.',
      'The platform currently generates ~25 thousand monthly organic visitors, has thousands of registered users, and services a number of paid users.',
    ],
    id: 'intellispect-wu',
    matchId: 'intellispect',
  },
  {
    company: 'BB&T (Truist)',
    title: 'Investment Manager',
    dates: '2016 - 2020',
    targetID: 'bbt',
    desc: [
      'At Truist, I served as an investment manager for nonprofit organizations with between $10 and $100 million in investable assets. I was also part of the team responsible for the broad asset allocation and strategy selection decisions within the portfolios we managed.',
      `I built and maintained two pieces important pieces of software in this role, both of which utilized Visual Basic for Applications. I don't love VBA, but excel is the hammer of the financial industry and I needed these tools to be accessible to non-technical bankers.`,
      `The first was an asset allocation analysis tool. It would download all clients' investment positions from our trust accounting system and output each client into a single-page report. This document allowed PMs, at a glance, to analyze deviations from target allocations, maintain correct cash levels, and ensure non-approved assets didn't persist in client portfolios.`,
      `The second was an outside manager (think mutual funds & ETFs) scoring system to help us evaluate current and potential positions for our portfolio models. The system would take data from 3rd party vendors and rank possible investment options across asset classes on criteria set by the investment team. This system allowed our investment team to narrow a universe of around 20,000 investment alternatives to ~200 for closer analysis.`,
      `In addition to the technical work, I also got hundreds of hours of practice presenting to large, sophisticated nonprofit boards on (economically) technical subjects.`,
    ],
    id: 'bbt-wu',
    matchId: 'bbt',
  },
  {
    company: 'United Bank',
    title: 'Director of Investments',
    dates: '2010 - 2016',
    targetID: 'unitedbank',
    desc: [
      'I served in several roles at United Bank, supporting the investment function of a $1.5 billion asset manager. My last role with the company was managing the 10-person investment and overseeing the investment process and the delivery of our investment services to clients.',
      'These roles included investment responsibilities such as strategy/investment research, handling client relationships, and management of employees. Still, I also had the chance to improve many processes inside the department with code.',
      'A few examples of applications that I built during my tenure include:',
      ' - A Monte Carlo simulation to construct efficient asset allocation mixes for client portfolios,',
      ' - An automated tool to analyze every asset held within the department (100k+ positions) and flag at-risk assets to be sold,',
      ' - A daily strategy performance dashboard that allowed the investment team to quickly digest manager and strategy performance within our managed portfolios.',
    ],
    id: 'unitedbank-wu',
    matchId: 'unitedbank',
  },
  {
    company: 'WVU',
    title: 'Teaching Assistant',
    dates: '2009-2010',
    targetID: 'wvu',
    desc: [
      'While in graduate school, I taught a junior/senior-level seminar on investment analysis.',
      'The content of the class focused on analyzing and valuing different types of investment securities.  However, the course provided me with education by fire in public speaking, preparing for presentations under tight deadlines, and having difficult conversations with people about their performance.',
    ],
    id: 'wvu-wu',
    matchId: 'wvu',
  },
]

export function ExperienceWriteup() {
  return (
    <div className="flex flex-col gap-16">
      {experiences.map((exp, i) => (
        <Card key={i} exp={exp} />
      ))}
    </div>
  )
}

const Card = ({ exp }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="group cursor-pointer rounded-md p-2 hover:border hover:border-zinc-200 hover:bg-zinc-100 hover:p-[7px] hover:dark:border-zinc-700 dark:hover:bg-zinc-800"
        id={exp.id}
      >
        <span className="text-sm font-light text-teal-700 dark:text-teal-400">
          {exp.company} | {exp.dates}
        </span>
        <h3 className="text-lg text-zinc-800 dark:text-zinc-100">
          {exp.title}
        </h3>
        <div className="relative">
          <div
            className={`${
              !isOpen && 'max-h-32'
            } overflow-hidden transition-all duration-1000`}
          >
            {exp.desc.map((string, i) => {
              return (
                <p
                  className="py-2 text-sm text-zinc-600 dark:text-zinc-200"
                  key={i}
                >
                  {string}
                </p>
              )
            })}
          </div>
          {!isOpen && (
            <div className="absolute bottom-0 h-16 w-full bg-gradient-to-t from-white group-hover:from-zinc-100 dark:from-zinc-900 dark:group-hover:from-zinc-800"></div>
          )}
        </div>
        <button className=" right-0 text-xs uppercase text-zinc-500 hover:underline">
          {!isOpen ? 'Read More' : 'Read Less'}
        </button>
      </div>
    </>
  )
}
