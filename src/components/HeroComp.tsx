import React from 'react'
import Image from 'next/image'

// Optional: Cleaner way to render icons (update hrefs as needed)
const socialIcons = [
  { src: '/icons8-linkedin.svg', alt: 'linkedin', href: 'https://linkedin.com' },
  { src: '/icons8-github-logo.svg', alt: 'github', href: 'https://github.com' },
  { src: '/icons8-x.svg', alt: 'x', href: 'https://x.com' },
  { src: '/email.png', alt: 'email', href: 'mailto:youremail@example.com' },
]

const HeroComp = () => {
  return (
    <div className="max-w-8xl grid md:grid-cols-2 grid-cols-1 bg-black gap-4 md:gap-8 mt-4 p-2 md:p-4">
      {/* Left Column */}
      <div>
        
        {/* Top row: profile image & icons */}
        <div className="flex  gap-2 space-x-2 md:space-x-6">
          
          {/* Profile Image */}
          <div>
            <Image
              className="rounded-xl w-30 h-30 md:w-[200px] md:h-[200px]"
              width={150}
              height={150}
              alt="profile"
              src={"/profile.png"}
            />
          </div>
          <div>
            
           <div className="flex flex-col  space-x-3 ">
            <span className="bg-green-900 text-green-300 px-3 py-0.5 mt-1 rounded-full text-xs font-semibold w-[100px]">Available</span>
      <h1 className="text-xl md:text-3xl font-bold text-white mt-2">Neeraj Kushwaha </h1>
     <p className='text-gray-200 text-sm'>software engineer</p>
      
    </div>
          
          {/* Social Icons */}
          <div className="flex mt-2   rounded h-8 w-auto items-center px-2 gap-2">
            
            {socialIcons.map((icon, idx) => (
              <a key={idx} href={icon.href} target="_blank" rel="noopener noreferrer">
                <Image
                  className="object-contain invert   border-white"
                  width={30}
                  height={30}
                  alt={icon.alt}
                  src={icon.src}
                />
              </a>
            ))}
          </div>
        </div>
        </div>

        {/* Responsive action buttons */}
        <div className="flex  gap-2 mt-12 md:flex-row md:gap-6 md:space-x-3">
          <a
            href="/Neeraj_Resume.pdf"
            download
            className="bg-white text-black px-4 py-1 text-sm rounded-lg font-semibold shadow-md hover:bg-gray-200 transition md:px-6 md:py-2 md:text-base"
          >
            Download Resume
          </a>
          <a
            href="#projects"
            className="border border-white text-white px-4 py-1 text-sm rounded-lg font-semibold hover:bg-white hover:text-black transition md:px-6 md:py-2 md:text-base"
          >
            View My Work
          </a>
        </div>
        
        {/* Name & tagline */}
        {/* <div className="md:text-4xl font-bold mt-6 space-y-2">
          Hii I am <span className="text-blue-700">Neeraj kushwaha</span>
          <p className="text-xl font-semibold text-gray-100">
            Turning coffee and code into real-world projects.
          </p>
        </div> */}
      </div>

      {/* Right Column: About Section */}
      <div>
        <section id="about" className="py-4 px-2 md:px-6 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-2 md:mb-4">About Me</h2>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed">
            Hey, I’m <span className="text-white font-semibold">Neeraj Kushwaha</span> — a 3rd year Computer Engineering student with a passion for web development and self-growth.
            I’m on a journey to become a <span className="text-white font-medium">full-stack developer</span>, constantly improving my skills by building real-world projects using the MERN stack (MongoDB, Express, React, Node.js).
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-2 md:mt-4">
            Beyond coding, I’m deeply committed to personal development. I believe in building not just apps, but also a better version of myself — every single day. I enjoy working on meaningful projects, editing videos, and learning by doing.
          </p>
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mt-2 md:mt-4">
            Right now, I’m actively looking for internship opportunities where I can apply my knowledge, grow with a team, and contribute to impactful solutions.
          </p>
        </section>
      </div>
    </div>
  )
}

export default HeroComp
