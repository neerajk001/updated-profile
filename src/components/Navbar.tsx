'use client'
import React from 'react'
import { ModeToggle } from './ModeToggle'

const Navbar = () => {
  return ( 
    <div className='px-4 py-4  text-white dark:text-black '>
        <div className='w-full    rounded-full  bg-black dark:bg-white '>
           <div className='flex justify-between py-5 px-8 items-center '>
             <div className='text-xl font-bold'>
                portfolio
            </div>
            <div className='flex gap-6 items-center text-xl font-semibold'>
                <h1>Home</h1>
                <h1>About</h1>
                <h1>Projects</h1>
                <ModeToggle/>
            </div>
           </div>
        </div>
    </div>
  )
}

export default Navbar