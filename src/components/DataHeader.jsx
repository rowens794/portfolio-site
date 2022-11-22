import React from 'react'
import Image from 'next/image'

export function Hero() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="m-auto flex h-full max-w-2xl flex-col justify-center">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-4xl">
          Interactive
          <br /> Data Visualizations
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          I have split time in my career working in both investment management &
          technology. I am fascinated by how markets and technology interact to
          push global economies forward.
        </p>
      </div>
      <div>
        <Image
          src="/images/computer.png"
          width={700}
          height={467}
          alt="brain"
        />
      </div>
    </div>
  )
}
