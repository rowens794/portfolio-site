import React, { useState } from 'react'
import Link from 'next/link'

export default function Projects({ posts }) {
  return (
    <div>
      <h2 className="relative z-10 ml-8 inline-block bg-white px-2 text-2xl font-bold tracking-tight text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100 sm:text-3xl">
        My Thoughts
      </h2>
      <hr className="relative z-0 -translate-y-4 border border-teal-500" />

      <div className="mt-12 grid grid-cols-1 gap-x-12 lg:grid-cols-2">
        {posts.map((post) => (
          <Link href={`/articles/${post.slug.current}`} key={post._id}>
            <div className="group cursor-pointer rounded-md p-2 hover:border hover:border-zinc-200 hover:bg-zinc-100 hover:p-[7px] hover:dark:border-zinc-700 dark:hover:bg-zinc-800">
              <div>
                <span className="text-[10px] font-light italic text-zinc-600 dark:text-zinc-300">
                  {new Date(post.publishedAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
                <h3 className="text-lg leading-5 text-zinc-800 dark:text-zinc-100">
                  {post.title}
                </h3>
                <p className="font-light text-zinc-600 dark:text-zinc-300">
                  {toPlainText(post.body)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

function toPlainText(blocks = []) {
  return (
    blocks
      // loop through each block
      .map((block) => {
        // if it's not a text block with children,
        // return nothing
        if (block._type !== 'block' || !block.children) {
          return ''
        }
        // loop through the children spans, and join the
        // text strings
        return block.children.map((child) => child.text).join('')
      })
      // join the paragraphs leaving split by two linebreaks
      .join('\n\n')
  )
}

const articles = [
  {
    id: 1,
    title: 'How interest rates are set',
    description: 'A brief explanation of how interest rates are set.',
    url: '/articles/how-interest-rates-are-set',
    date: '2021-01-01',
  },
  {
    id: 2,
    title: 'Outside manager search and selection',
    description: 'A framework for selecting outside managers.',
    url: '/articles/outside-manager-search-and-selection',
    date: '2021-01-01',
  },
  {
    id: 3,
    title: 'How to invest in a recession',
    description: 'A framework for investing in a recession.',
    url: '/articles/how-to-invest-in-a-recession',
    date: '2021-01-01',
  },
  {
    id: 4,
    title: 'Investment in MBS in a rising rate environment',
    description:
      'A framework for investing in MBS in a rising rate environment.',
    url: '/articles/investment-in-mbs-in-a-rising-rate-environment',
    date: '2021-01-01',
  },
]
