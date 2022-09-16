import React from 'react'

export function PreferredTech() {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-xl">
        My Preferred Tech
      </h2>
      <p className="mt-6 max-w-xl text-base text-zinc-600 dark:text-zinc-400">
        I&apos;m comfortable getting up to speed with new technology quickly,
        but when I&apos;m starting a new project I tend to reach for:
      </p>
      <ul className="mt-4 flex flex-row flex-wrap gap-1 px-4 font-bold text-teal-600 dark:text-teal-400">
        <li className="px-2">React</li>
        <li className="px-2">Next.js</li>
        <li className="px-2">Node.js</li>
        <li className="px-2">ExpressJS</li>
        <li className="px-2">MongoDB</li>
        <li className="px-2">Tailwind</li>
        <li className="px-2">TypeScript</li>
        <li className="px-2">VictoryChart</li>
      </ul>
    </>
  )
}
