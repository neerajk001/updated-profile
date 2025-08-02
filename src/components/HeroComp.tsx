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
    <div className="max-w-8xl grid md:grid-cols-2 grid-cols-1 bg-black gap-4 md:gap-8 py-4` p-2 md:p-4">
      {/* Left Column */}
      <div>
        
        {/* Top row: profile image & icons */}
        <div className="flex  gap-2 space-x-4 md:space-x-6">
          
          {/* Profile Image */}
          <div className='mt-3' >
            <Image
              className="rounded-xl border border-white object-cover p-1 w-30 h-30 md:w-[200px] md:h-[200px]"
              width={150}
              height={150}
              alt="profile"
              src={"/download (3).jpg"}
            />
          </div>
          <div>
            
           <div className="flex flex-col  space-x-3 ">
            <span className="bg-green-900 text-green-300 px-3 py-0.5 mt-1 rounded-full text-xs font-semibold w-[100px]">Available</span>
      <h1 className="text-xl md:text-3xl font-bold text-white mt-2">Neeraj Kushwaha </h1>
     <p className='text-gray-200 text-sm'>software engineer</p>
      
    </div>
          
          {/* Social Icons */}
         <div className="flex mt-2 gap-3">
  {socialIcons.map((icon, idx) => (
    <a key={idx} href={icon.href} target="_blank" rel="noopener noreferrer">
      <div className="p-1 border-1 border-white rounded-md hover:bg-white/10 transition">
        <Image
          className="object-cover invert"
          width={30}
          height={30}
          alt={icon.alt}
          src={icon.src}
        />
      </div>
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
    <p className="text-gray-100 text-base md:text-lg leading-relaxed">
      I’m <span className="text-white font-semibold">Neeraj Kushwaha</span>, a final-year Computer Engineering student with a focus on full-stack web development. I enjoy building practical, user-focused applications using the MERN stack (MongoDB, Express, React, Node.js).
    </p>
    <p className="text-gray-100 text-base md:text-lg leading-relaxed mt-2 md:mt-4">
      I’ve worked on freelance and contract-based projects, where I handled both frontend and backend tasks. I am always looking to learn, improve, and take on meaningful challenges.
    </p>
    <p className="text-gray-100 text-base md:text-lg leading-relaxed mt-2 md:mt-4">
      Currently, I’m seeking internship opportunities to apply my skills, gain industry experience, and grow as a developer.
    </p>
  </section>
</div>

    </div>
  )
}

export default HeroComp
