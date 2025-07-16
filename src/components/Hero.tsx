'use client'

import React from 'react'
import Image from 'next/image'
import { Button } from './ui/button'

const Hero = () => {
  return (
    <section className="min-h-screen w-full flex items-center bg-background px-6 md:px-12 lg:px-24 bg-black">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center w-full">

        {/* ✅ Image First on Mobile */}
        <div className="flex justify-center md:justify-end order-1 md:order-2">
          <Image
            src="/real.png"
            width={300}
            height={300}
            alt="Neeraj's Profile"
            className="rounded-full shadow-xl border border-gray-300 dark:border-gray-700"
          />
        </div>

        {/* ✅ Text Content */}
        <div className="order-2 md:order-1 space-y-6 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
            Hi, I'm <span className="text-primary">Neeraj Kushwaha</span>
          </h1>

          <p className="text-lg md:text-xl font-medium text-muted-foreground">
            Full-stack developer — turning ideas into elegant, fast, and user-friendly web apps.
          </p>

          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400">
            I build modern interfaces with React, Tailwind CSS, and powerful backend systems using the MERN stack.
          </p>

          <div className="flex flex-col sm:flex-row sm:justify-start justify-center gap-4 pt-4">
            <Button size="lg" className="w-full sm:w-48 bg-white text-lg">View My Work</Button>
            <Button size="lg" variant="outline" className="w-full sm:w-48 border-2 border-white">GitHub</Button>
          </div>
        </div>

      </div>
    </section>
  )
}

export default Hero
