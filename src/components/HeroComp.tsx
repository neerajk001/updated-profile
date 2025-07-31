import React from 'react'
import Image from 'next/image'

const HeroComp = () => {
  return (
    <div className='max-w-8xl grid md:grid-cols-2 grid-cols-1 bg-black gap-8 mt-4 p-4 '>
      {/* Left Column */}
      <div>
        {/* Row with image and icons */}
        <div className='flex flex-row items-center space-x-6'>
          {/* Profile Image */}
          <div>
            <Image
              className='rounded-xl md:w-[200px] md:h-[200px]'
              width={150}
              height={150}
              alt='profile'
              src={'/profile.png'}
            />
          </div>
          {/* Social Icons */}
          <div className='flex border border-white rounded h-8 w-auto items-center px-2 gap-2'>
            <Image className='object-contain invert' width={30} height={30} alt='linkedin' src={'/icons8-linkedin.svg'} />
            <Image className='object-contain invert' width={30} height={30} alt='github' src={'/icons8-github-logo.svg'} />
            <Image className='object-contain invert border-1' width={30} height={30} alt='x' src={'/icons8-x.svg'} />
            <Image className='object-contain invert' width={30} height={30} alt='email' src={'/email.png'} />
          </div>

        </div>
        <div className='mt-4 gap-6 space-x-3'>
          <a
            href="/Neeraj_Resume.pdf"
            download
            className="bg-white text-black px-6 py-2 rounded-lg font-semibold shadow-md hover:bg-gray-200 transition"
          >
            Download Resume
          </a>
          <a
            href="#projects" // Make sure your projects section has id="projects"
            className="border border-white text-white px-6 py-2 rounded-lg font-semibold hover:bg-white hover:text-black transition"
          >
            View My Work
          </a>
        </div>
        {/* Name directly under the image */}
        <div className='md:text-4xl font-bold mt-6 space-y-2 '>
          Hii I am <span className='text-blue-700'>Neeraj kushwaha</span>
          <p className='text-xl font-semibold text-gray-100 '>Turning coffee and code into real-world projects.</p>
        </div>
      </div>
      {/* Right Column */}
      <div>
        <section id="about" className="py-4 px-6 max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            Hey, I m <span className="text-white font-semibold">Neeraj Kushwaha</span> — a 3rd year Computer Engineering student with a passion for web development and self-growth.
            I’m on a journey to become a <span className="text-white font-medium">full-stack developer</span>, constantly improving my skills by building real-world projects using the MERN stack (MongoDB, Express, React, Node.js).
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Beyond coding, I’m deeply committed to personal development. I believe in building not just apps, but also a better version of myself — every single day. I enjoy working on meaningful projects, editing videos, and learning by doing.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mt-4">
            Right now, I’m actively looking for internship opportunities where I can apply my knowledge, grow with a team, and contribute to impactful solutions.
          </p>
        </section>

      </div>
    </div>
  )
}

export default HeroComp
