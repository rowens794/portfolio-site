import React, { useState } from 'react'
import Link from 'next/link'
import { GitHubIcon, YouTubeIcon, WrittenIcon } from '@/components/SocialIcons'

function SocialLink({ icon: Icon, ...props }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <Link className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </Link>
    </div>
  )
}

function VideoButton({ icon: Icon, ...props }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <button className="group -m-1 p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
      </button>
    </div>
  )
}

function SocialLinkNoFollow({ icon: Icon, ...props }) {
  return (
    <div className="flex h-full flex-col justify-center">
      <div className="group relative -m-1 cursor-not-allowed p-1" {...props}>
        <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        <div className="invisible absolute top-8 -right-32 z-30 w-64 rounded-md border border-zinc-200 bg-zinc-100 p-2 text-xs leading-4 text-zinc-500 group-hover:visible">
          <p>
            This is a revenue generating project, so I don&apos;t publicly share
            the source - but check out the video or get in touch and I&apos;d be
            happy to share more details about it.{' '}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <div>
      <h2 className="relative z-10 ml-8 inline-block bg-white px-2 text-2xl font-bold tracking-tight text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 sm:text-3xl">
        Projects
      </h2>
      <hr className="relative z-0 -translate-y-4 border border-teal-500" />
      <Intellispect />
      <Zilch />
      <VanillaReddit />
    </div>
  )
}

const VideoFrame = ({ url, title, setShowVideo }) => {
  return (
    <>
      <div
        onClick={() => setShowVideo(false)}
        className="fixed top-0 left-0 z-60 flex h-full w-full flex-col justify-center backdrop-blur-[2px]"
      >
        <div
          className="mx-auto aspect-video w-full max-w-2xl px-4 drop-shadow-2xl "
          dangerouslySetInnerHTML={{
            __html: `
              <iframe 
                width="100%" 
                height="100%" 
                src=${url} 
                title=${title} 
                frameborder="0" 
                allow="accelerometer; 
                autoplay=0; 
                clipboard-write; 
                encrypted-media; 
                gyroscope; 
                picture-in-picture" 
                allowfullscreen>
              </iframe>
              `,
          }}
        />
        <p className="cursor-pointer text-center text-slate-100 hover:font-bold">
          Close Video
        </p>
      </div>

      <div
        className="fixed top-0 left-0 z-50 h-full w-full bg-slate-800 opacity-50"
        onClick={() => setShowVideo(false)}
      ></div>
    </>
  )
}

const RedditWriteup = ({ setShowVideo }) => {
  return (
    <>
      <div
        onClick={() => setShowVideo(false)}
        className="fixed top-0 left-0 z-60 flex h-full w-full flex-col justify-center px-4 backdrop-blur-[2px]"
      >
        <div className="relative mx-auto w-full max-w-3xl rounded-md bg-zinc-50 py-6 px-8 dark:bg-zinc-800">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            className="absolute top-2 right-2 h-6 w-6 cursor-pointer stroke-zinc-400 hover:stroke-zinc-900 dark:stroke-zinc-500 dark:hover:stroke-zinc-100"
            onClick={() => setShowVideo(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <h3 className="relative z-10 ml-8 inline-block  bg-zinc-50 px-2 text-2xl font-bold tracking-tight text-zinc-800 dark:bg-zinc-800  dark:text-zinc-100 sm:text-3xl">
            Vanilla Reddit
          </h3>
          <hr className="relative z-0 mb-4 -translate-y-4 border border-teal-500" />

          <p className="mb-2 text-sm text-zinc-800 dark:text-zinc-100">
            This is very much a toy project - my goal was to replicate a complex
            user interface using nothing but HTML, CSS, and vanilla JS. I wanted
            a project that had several components that respond independently
            across screen sizes and that require JS the deliver the necessary
            user experience.
          </p>

          <p className="mb-2 text-sm text-zinc-800 dark:text-zinc-100">
            The project is not a functional clone of reddit - it is only
            intented as an exercise in replicating complex UI elements without
            the conviences of modern frameworks. However, it does replicate a
            number of functional user interactions:
          </p>

          <ul className="my-4 ml-4 mb-4 list-disc text-sm text-zinc-800 dark:text-zinc-100">
            <li>Post Fetching from Public Reddit API</li>
            <li>Functional Feed Selection (Best, Hot, etc) </li>
            <li>State Aware Up/Down Voting</li>
            <li>Functional Home Menu Dropdown</li>
          </ul>

          <p className="mb-2 text-sm text-zinc-800 dark:text-zinc-100">
            You can visit the project repository here:{' '}
            <a
              href="https://github.com/rowens794/vanilla-reddit"
              className="underline"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>

      <div
        className="fixed top-0 left-0 z-50 h-full w-full bg-zinc-800 opacity-50"
        onClick={() => setShowVideo(false)}
      ></div>
    </>
  )
}

const Intellispect = () => {
  const [showVideo, setShowVideo] = useState(false)
  return (
    <>
      {showVideo && (
        <VideoFrame
          url="https://www.youtube.com/embed/lP6MJYbWxzg"
          title="Intellispect Project Video"
          setShowVideo={setShowVideo}
        />
      )}
      <div className="grid grid-cols-9 gap-3 py-20">
        {/* Project Image */}
        <div
          className="group relative order-1 col-span-9 mx-auto max-w-[600px] overflow-hidden rounded border border-slate-300 drop-shadow-lg xl:col-span-5"
          style={{
            WebkitBoxShadow: '5px 5px 0px 2px #334154',
            boxShadow: '6px 5px 0px 2px #334154',
          }}
        >
          {/* eslint-disable-next-line */}
          <img
            src="/images/intellispect.png"
            alt="Intellispect"
            width={600}
            height={300}
            className=" contrast-more z-0 max-w-full mix-blend-darken grayscale transition duration-300 group-hover:grayscale-0 md:max-w-[600px]"
          />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 ">
            <button
              onClick={() => setShowVideo(true)}
              className="mx-auto w-48 rounded-full border border-teal-300 bg-teal-200 px-2 py-1 text-sm font-light text-teal-600 drop-shadow-lg"
            >
              <YouTubeIcon className="mr-2 inline-block h-6 w-6 fill-teal-600" />
              Play Project Video
            </button>
          </div>
        </div>

        <div className="col-span-9 mx-auto flex h-full max-w-[600px] flex-col justify-center xl:order-1 xl:col-span-4">
          <p className="text-md text-left font-semibold text-teal-500 xl:text-right">
            Nonprofit Market Intelligence
          </p>
          <div className=" flex justify-start gap-2 xl:justify-end">
            <h3 className="text-right text-2xl font-bold text-slate-900 dark:text-slate-200">
              Intellispect
            </h3>
            <SocialLinkNoFollow
              href="https://github.com"
              aria-label="View on GitHub"
              icon={GitHubIcon}
            />
            <VideoButton
              aria-label="View on Youtube"
              icon={YouTubeIcon}
              onClick={() => setShowVideo(true)}
            />
          </div>
          <a
            href="https://www.intellispect.co/"
            target="_blank"
            rel="noreferrer"
            className="mb-4 cursor-pointer text-left text-sm font-medium text-slate-900 hover:underline dark:text-slate-100 xl:text-right"
          >
            www.intellispect.co
          </a>
          <div className="relative z-20 rounded-md text-slate-900 dark:text-white xl:w-[125%] xl:-translate-x-[20%] xl:bg-slate-700 xl:p-4 xl:text-white">
            <p>
              Intellispect helps service providers find nonprofits that need
              their help. This extensive project involves regularly (~1/month)
              downloading public nonprofit filings, cleaning the data, and
              maintain search for ~25,000 free and paid monthly users.
            </p>
          </div>

          <ul className="flex flex-wrap justify-start gap-2 py-4 xl:justify-end">
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              React
            </li>
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              NextJS
            </li>
            <li className="rounded-full  bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              Tailwind
            </li>
            <li className="rounded-full  bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              MongoDB
            </li>
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              Typescript
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

const Zilch = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      {showVideo && (
        <VideoFrame
          url="https://www.youtube.com/embed/TswLncN5O9k"
          title="Zilch Project Video"
          setShowVideo={setShowVideo}
        />
      )}
      <div className="grid grid-cols-9 gap-3 py-20">
        <div className="col-span-9 mx-auto flex h-full max-w-[600px] flex-col justify-center xl:order-2 xl:col-span-4">
          <p className="text-md text-left font-semibold text-teal-500">
            Multiplayer Dice Game
          </p>
          <div className=" flex justify-start gap-2">
            <h3 className="text-right text-2xl font-bold text-slate-900 dark:text-slate-200">
              Zilch
            </h3>
            <SocialLink
              href="https://github.com/rowens794/zilch"
              aria-label="View on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <VideoButton
              aria-label="View on Youtube"
              icon={YouTubeIcon}
              onClick={() => setShowVideo(true)}
            />
          </div>
          <a
            href="https://www.dontzilch.com/"
            target="_blank"
            rel="noreferrer"
            className="mb-4 cursor-pointer text-left text-sm font-medium text-slate-900 hover:underline dark:text-slate-100"
          >
            www.dontzilch.com
          </a>
          <div className="relative z-20 rounded-md text-slate-900 dark:text-white xl:w-[125%]  xl:bg-slate-700 xl:p-4 xl:text-white">
            <p>
              Yahtzee meets Press Your Luck. Zilch is a multiplayer dice game
              where contestants must put all their points on the line to keep
              rolling. The interface was built for mobile. Up to 8 players can
              join a private room for a game without the need for user
              registration.
            </p>
          </div>

          <ul className="flex flex-wrap justify-start gap-2 py-4 ">
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              React
            </li>
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              NextJS
            </li>
            <li className="rounded-full  bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              Tailwind
            </li>
            <li className="rounded-full  bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              PostgreSQL
            </li>
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              Typescript
            </li>
          </ul>
        </div>

        {/* Project Image */}
        <div
          className="group relative order-2 col-span-9 mx-auto max-w-[600px] overflow-hidden rounded border border-slate-300 drop-shadow-lg xl:col-span-5"
          style={{
            WebkitBoxShadow: '5px 5px 0px 2px #334154',
            boxShadow: '6px 5px 0px 2px #334154',
          }}
        >
          {/* eslint-disable-next-line */}
          <img
            src="/images/zilch.png"
            alt="Zilch"
            width={600}
            height={300}
            className=" contrast-more z-0 max-w-full mix-blend-darken grayscale transition duration-300 group-hover:grayscale-0 md:max-w-[600px]"
          />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 ">
            <button
              onClick={() => setShowVideo(true)}
              className="mx-auto w-48 rounded-full border border-teal-300 bg-teal-200 px-2 py-1 text-sm font-light text-teal-600 drop-shadow-lg"
            >
              <YouTubeIcon className="mr-2 inline-block h-6 w-6 fill-teal-600" />
              Play Project Video
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

const VanillaReddit = () => {
  const [showVideo, setShowVideo] = useState(false)

  return (
    <>
      {showVideo && (
        <RedditWriteup
          title="Vanilla Reddit Project Video"
          setShowVideo={setShowVideo}
        />
      )}
      <div className="grid grid-cols-9 gap-3 py-20">
        {/* Project Image */}
        <div
          className="group relative order-1 col-span-9 mx-auto max-w-[600px] overflow-hidden rounded border border-slate-300 drop-shadow-lg xl:col-span-5"
          style={{
            WebkitBoxShadow: '5px 5px 0px 2px #334154',
            boxShadow: '6px 5px 0px 2px #334154',
          }}
        >
          {/* eslint-disable-next-line */}
          <img
            src="/images/reddit.png"
            alt="Vanilla Reddit"
            width={600}
            height={300}
            className=" contrast-more z-0 max-w-full mix-blend-darken grayscale transition duration-300 group-hover:grayscale-0 md:max-w-[600px]"
          />
          <div className="absolute top-0 flex h-full w-full flex-col justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 ">
            <button
              onClick={() => setShowVideo(true)}
              className="mx-auto w-48 rounded-full border border-teal-300 bg-teal-200 px-2 py-1 text-sm font-light text-teal-600 drop-shadow-lg"
            >
              <WrittenIcon className="mr-2 inline-block h-6 w-6 fill-teal-100 stroke-teal-600" />
              Read Project Writeup
            </button>
          </div>
        </div>

        <div className="col-span-9 mx-auto flex h-full max-w-[600px] flex-col justify-center xl:order-1 xl:col-span-4">
          <p className="text-md text-left font-semibold text-teal-500 xl:text-right">
            Rebuilding Reddit with Vanilla JS
          </p>
          <div className=" flex justify-start gap-2 xl:justify-end">
            <h3 className="text-right text-2xl font-bold text-slate-900 dark:text-slate-200">
              Vanilla Reddit
            </h3>
            <SocialLink
              href="https://github.com/rowens794/vanilla-reddit"
              aria-label="View on GitHub"
              icon={GitHubIcon}
              target="_blank"
            />
            <WrittenIcon
              className="mr-2 inline-block h-6 w-6 translate-y-[3px] transform cursor-pointer fill-zinc-100 stroke-zinc-600  hover:fill-zinc-200 dark:fill-zinc-700 dark:stroke-zinc-400 dark:hover:stroke-zinc-300"
              aria-label="Read Writeup"
              onClick={() => setShowVideo(true)}
            />
          </div>
          <a
            href="https://rowens794.github.io/vanilla-reddit/"
            target="_blank"
            rel="noreferrer"
            className="mb-4 cursor-pointer text-left text-sm font-medium text-slate-900 hover:underline dark:text-slate-100 xl:text-right"
          >
            rowens794.github.io/vanilla-reddit/
          </a>
          <div className="relative z-20 rounded-md text-slate-900 dark:text-white xl:w-[125%] xl:-translate-x-[20%] xl:bg-slate-700 xl:p-4 xl:text-white">
            <p>
              Curiosity got the better of me and I decided to implement
              Reddit&apos;s homepage interface in pure HTML, CSS and JS -
              without the use of any external libraries. Note that this project
              is not about recreating Reddit feature for feature, but rather
              building interactions from scratch.
            </p>
          </div>

          <ul className="flex flex-wrap justify-start gap-2 py-4 xl:justify-end">
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              HTML
            </li>
            <li className="rounded-full bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              CSS
            </li>
            <li className="rounded-full  bg-teal-300 px-2 text-xxs font-bold text-teal-700 opacity-80 hover:opacity-100">
              JS
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}
