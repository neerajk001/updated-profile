'use client'

import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { ModeToggle } from './ModeToggle'
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className='px-4 py-2 text-white dark:text-black fixed top-4 left-0 w-full z-50'>
      <div className='w-full rounded-full bg-black dark:bg-white shadow-lg transition-all duration-300'>
        <div className='flex justify-between items-center px-8 py-5 '>

          {/* Logo */}
          <div className='text-xl font-bold text-white dark:text-black'>
            <Link href="/">Portfolio</Link>
          </div>

          {/* Desktop Menu */}
          <div className='hidden md:flex gap-6 items-center text-lg font-semibold text-white dark:text-black'>
            <Link href="#home" className='hover:text-blue-500 transition'>Home</Link>
            <Link href="#about" className='hover:text-blue-500 transition'>About</Link>
            <Link href="#projects" className='hover:text-blue-500 transition'>Projects</Link>
            <ModeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className='md:hidden'>
            <button onClick={() => setMenuOpen(!menuOpen)}>
              {menuOpen ? <X size={28} className='text-white dark:text-black' /> : <Menu size={28} className='text-white dark:text-black' />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {menuOpen && (
          <div className='md:hidden px-8 pb-6 flex flex-col gap-4 text-white dark:text-black text-base font-medium bg-black dark:bg-white rounded-b-3xl'>
            <Link href="#home" onClick={() => setMenuOpen(false)} className='hover:text-blue-500'>Home</Link>
            <Link href="#about" onClick={() => setMenuOpen(false)} className='hover:text-blue-500'>About</Link>
            <Link href="#projects" onClick={() => setMenuOpen(false)} className='hover:text-blue-500'>Projects</Link>
            <ModeToggle />
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar
