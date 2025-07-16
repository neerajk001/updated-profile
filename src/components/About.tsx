'use client'

import React from 'react'
import { Badge } from './ui/badge'

const skills = [
  'JavaScript',
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Python',
  'PostgreSQL',
  'MongoDB',
  'AWS',
  'Docker',
  'Git',
  'Tailwind CSS',
]

const About = () => {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground">My journey in web development and the skills I've acquired</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-semibold mb-3">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                Started my coding journey with a deep curiosity about how websites and apps work. What began as a hobby
                turned into a full-blown passion. I love building practical, useful tools and learning every step of the way.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-3">Experience</h3>
              <p className="text-muted-foreground leading-relaxed">
                I've worked on multiple freelance and personal projects — ranging from static pages to scalable full-stack
                apps. I enjoy building clean UIs and making user-friendly experiences that solve real problems.
              </p>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6">Skills & Technologies</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <Badge key={skill} variant="secondary" className="text-sm">
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
