import React from 'react'
import Link from 'next/link'

export function Hero() {
  return (
    <div className="grid gap-12 lg:grid-cols-2">
      <div className="m-auto h-full max-w-2xl">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Thoughts on <br /> Markets & Technology
        </h1>
        <span className="text-light text-zinc-500">Markets & Technology</span>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I have split time in my career working in both investment management &
          technology. I am fascinated by how markets and technology interact to
          push global economies forward.
        </p>
      </div>
      <div></div>
    </div>
  )
}
