import React from 'react'

import { Button } from '@/components/Button'

function ArrowDownIcon(props) {
  return (
    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" {...props}>
      <path
        d="M4.75 8.75 8 12.25m0 0 3.25-3.5M8 12.25v-8.5"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function DownloadCV() {
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
    <Button
      variant="secondary"
      className="group mt-6 w-full border border-zinc-200 dark:border-zinc-700/40"
      onClick={downloadResume}
    >
      Download Resume
      <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
    </Button>
  )
}
