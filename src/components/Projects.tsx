'use client'

import React, { useState } from 'react'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from './ui/card'
import Link from 'next/link'
import { Github, ExternalLink } from 'lucide-react'

const projects = {
  fullstack: [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce solution with payment integration',
      tech: ['Next.js', 'TypeScript', 'Prisma', 'Stripe', 'PostgreSQL'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Task Management App',
      description: 'Collaborative project management tool with real-time updates',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Social Media Dashboard',
      description: 'Analytics dashboard for social media management',
      tech: ['Vue.js', 'Python', 'FastAPI', 'Redis', 'Chart.js'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ],
  mini: [
    {
      title: 'Weather App',
      description: 'Simple weather application with location detection',
      tech: ['React', 'OpenWeather API', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Todo List',
      description: 'Clean todo application with local storage',
      tech: ['JavaScript', 'HTML5', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Color Palette Generator',
      description: 'Generate beautiful color palettes for design',
      tech: ['React', 'Color Theory', 'CSS3'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ],
  landing: [
    {
      title: 'SaaS Landing Page',
      description: 'Modern landing page for a SaaS product',
      tech: ['Next.js', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Restaurant Website',
      description: 'Elegant restaurant website with menu and reservations',
      tech: ['HTML5', 'CSS3', 'JavaScript', 'PHP'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
    {
      title: 'Portfolio Template',
      description: 'Responsive portfolio template for developers',
      tech: ['React', 'Styled Components', 'Gatsby'],
      github: 'https://github.com',
      live: 'https://example.com',
    },
  ],
}

const Projects = () => {
  const [activeTab, setActiveTab] = useState('fullstack')

  return (
    <section id="projects" className="py-24 px-6 md:px-10 lg:px-24 bg-black text-foreground">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">My Projects</h2>
          <p className="text-lg text-muted-foreground">A showcase of my work across different categories</p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="flex bg-muted rounded-lg p-1 space-x-1">
            {['fullstack', 'mini', 'landing'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md font-medium transition-all ${
                  activeTab === tab
                    ? 'bg-background text-primary shadow'
                    : 'text-muted-foreground hover:text-primary'
                }`}
              >
                {tab === 'fullstack' && 'Fullstack Projects'}
                {tab === 'mini' && 'Mini Projects'}
                {tab === 'landing' && 'Landing Pages'}
              </button>
            ))}
          </div>
        </div>

        {/* Project Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects[activeTab as keyof typeof projects].map((project, index) => (
            <Card
              key={index}
              className="h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="text-xl">{project.title}</CardTitle>
                <CardDescription>{project.description}</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline" className="text-xs px-2 py-1">
                      {tech}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2 mt-4">
                  <Button variant="outline" size="sm" asChild>
                    <Link href={project.github} target="_blank">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </Link>
                  </Button>
                  <Button size="sm" asChild>
                    <Link href={project.live} target="_blank">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Live Demo
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
