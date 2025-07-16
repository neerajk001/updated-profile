'use client'

import React from 'react'
import { Badge } from './ui/badge'

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'Python', 'PostgreSQL', 'MongoDB', 'AWS', 'Docker', 'Git', 'Tailwind CSS',
]

const About = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-28 bg-black text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">About Me</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            My journey in web development and the skills I have acquired
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-12 items-start text-lg md:text-xl">
          {/* Left - Journey & Experience */}
          <div className="space-y-10">
            <div>
              <h3 className="text-2xl font-semibold mb-3">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my coding journey with a deep curiosity about how websites and apps work.
                What began as a hobby turned into a full-blown passion. I love building practical, useful tools and learning every step of the way.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-semibold mb-3">Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                I have  worked on multiple freelance and personal projects — ranging from static pages to scalable full-stack apps.
                I enjoy building clean UIs and making user-friendly experiences that solve real problems.
              </p>
            </div>
          </div>

          {/* Right - Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-3">
              {skills.map(skill => (
                <Badge key={skill} variant="secondary" className="text-white text-lg border-1 border-white px-6 py-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
