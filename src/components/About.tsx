'use client'

import React from 'react'
import { Badge } from './ui/badge'

const experiences = [
  {
    year: '2023 – Present',
    title: 'Freelance Developer',
    org: 'Self-employed / Contract',
    description:
      'Worked with small agencies and individual clients on web development projects. Built responsive full-stack applications using the MERN stack, implemented REST APIs, fixed bugs, and collaborated closely with teams to deliver clean and scalable code.',
  },
  {
    year: '2022 – 2023',
    title: 'Personal Projects',
    org: 'Independent',
    description:
      'Built various web applications to solve real-world problems while strengthening my knowledge of frontend and backend technologies. Focused on user experience, performance, and clean design using React, Node.js, and MongoDB.',
  },
]

const skills = [
  'JavaScript', 'TypeScript', 'React', 'Next.js', 'Node.js',
  'MongoDB', 'Express.js', 'HTML', 'CSS', 'Tailwind CSS',
  'Git', 'PostgreSQL', 'Python', 'REST APIs', 'Vercel', 'Netlify'
]

const About = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-28 bg-black text-foreground ">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <div className=" mx-4 mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 "> Experience</h2>
          <p className="text-lg md:text-xl text-muted-foreground">
            A look at what I’ve worked on so far
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-12 border-l-2 border-gray-600 pl-6 mb-24">
          {experiences.map((exp, index) => (
            <div key={index} className="relative">
              <div className="absolute -left-3 top-1.5 w-3 h-3 bg-white rounded-full"></div>
              <div className="mb-1 text-sm text-muted-foreground">{exp.year}</div>
              <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
              <p className="text-base font-medium text-gray-300 mb-1">{exp.org}</p>
              <p className="text-gray-100 leading-relaxed">{exp.description}</p>
            </div>
          ))}
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-3xl font-semibold text-white mb-6">Skills & Technologies</h3>
          <div className="flex flex-wrap gap-4">
            {skills.map((skill) => (
              <Badge
                key={skill}
                variant="secondary"
                className="text-white text-base border bg-black border-white px-3 py-1"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
