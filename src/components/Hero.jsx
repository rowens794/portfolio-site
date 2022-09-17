import React from 'react'
import Link from 'next/link'

import Headshot from '@/components/Headshot'
import { GitHubIcon, LinkedInIcon } from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  )
}

export function Hero() {
  return (
    <div className="flex flex-col-reverse gap-12 lg:flex-row">
      <div className="m-auto h-full max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Ryan Owens
        </h1>
        <span className="text-light text-zinc-500">
          (304) 231-7428 | rowens794@gmail.com
        </span>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I spent a decade in banking until I discovered that I love building
          products on the web. I&apos;m currently running a small project that
          makes it easy for people to find nonprofit organizations - Now
          I&apos;m looking for something new.
        </p>
        <div className="mt-6 flex gap-3">
          <SocialLink
            href="https://github.com/rowens794"
            aria-label="Follow on GitHub"
            icon={GitHubIcon}
            target="_blank"
          />
          <SocialLink
            href="https://www.linkedin.com/"
            aria-label="Follow on LinkedIn"
            icon={LinkedInIcon}
            target="_blank"
          />
        </div>
      </div>

      {/* Cover Image */}
      <Headshot />
    </div>
  )
}
