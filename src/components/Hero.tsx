'use client'

import React from 'react'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center bg-background px-6 md:px-12 lg:px-24 bg-black">
      <div className="w-full space-y-6 text-center md:text-left">

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          Hi, I&apos;m <span className="text-blue-500">Neeraj Kushwaha</span>
        </h1>

        <p className="text-lg md:text-xl font-medium text-gray-300">
          Full-stack developer — turning ideas into elegant, fast, and user-friendly web apps.
        </p>

        <p className="text-base md:text-lg text-gray-400">
          I build modern interfaces with React, Tailwind CSS, and powerful backend systems using the MERN stack.
        </p>

        <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 pt-4">
          <Button size="lg" className="w-full sm:w-48 bg-white text-black text-lg">View My Work</Button>
          <Button size="lg" variant="outline" className="w-full sm:w-48 border-white text-white text-lg">GitHub</Button>
        </div>

      </div>
    </section>
  )
}

export default Hero
