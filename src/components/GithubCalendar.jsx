import React from 'react'
import GitHubCalendar from 'react-github-calendar'

export default function GithubCalendar() {
  return (
    <div className=" w-full text-center">
      <div className="mx-auto max-w-[844px]">
        <GitHubCalendar username="rowens794" year={2020} />
      </div>
    </div>
  )
}
