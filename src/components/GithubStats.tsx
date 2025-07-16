'use client'

import React from 'react'
import GitHubCalendar from 'react-github-calendar'
import { useTheme } from 'next-themes'

const GithubStats = () => {
  const { theme } = useTheme()

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-primary">GitHub Contributions</h2>
          <p className="text-lg text-muted-foreground">
            Here s a snapshot of my open-source activity over the past year.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="w-full md:w-auto overflow-x-auto p-6 rounded-2xl bg-white dark:bg-[#0d1117] shadow-xl border border-border">
            <GitHubCalendar
              username="neerajk001"
              colorScheme={theme === 'dark' ? 'dark' : 'light'}
              blockSize={16}
              blockMargin={5}
              fontSize={16}
              showWeekdayLabels={true}
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default GithubStats
