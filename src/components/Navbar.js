import React, { useEffect, useState } from 'react'
import classnames from 'tailwindcss-classnames';

const Navbar = () => {
  const [scrollHit, setScrollHit] = useState(0);
  const navStickyScrollThreshold = 200;

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window !== undefined) {
        setScrollHit(window.scrollY)
      }
    })
    return () => {
      window.removeEventListener("scroll", null)
    }
  })


  return (
    <div className={classnames(
      'flex justify-between section_padding_sm md:section_padding_md lg:section__padding h-[10vh] sticky top-0 left-0 right-0 z-100 ',
      "bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-60 transition-all ease-in-out duration-900",
      " top-0 left-0 z-50",
      {
        "fixed translate-y-0": scrollHit > navStickyScrollThreshold,
        "absolute": !(scrollHit > navStickyScrollThreshold),
        "-translate-y-20": scrollHit > navStickyScrollThreshold - 50 && scrollHit < navStickyScrollThreshold,
      }
    )} id="nav">
      <div className='flex items-center'>
        <h1><a href='#home' className='gradient__text text-4xl font-bold cursor-pointer'>RM.</a></h1>
      </div>
      <div className='flex items-center text-2xl space-x-6'>
        <p><a href='#about' className='cursor-pointer lowercase gradient__text hover:border-b-4 hover:border-red-300 transition hover:ease-linear hover:duration-[0.2s] hover:scale-x-4 hover:scale-y-7'>Profile</a></p>

        <p className=""><a href='#projects' className=' cursor-pointer lowercase gradient__text  hover:border-b-4 hover:border-red-300 transition-[width] duration-[2s] border-x-0 border-l-0 hover:border-x-full hover:border-l-full'>Projects</a></p>
        <p><a href='#skills' className='cursor-pointer gradient__text lowercase hover:border-b-4 hover:border-red-300'>Skills</a></p>
        <p><a href='#contact' className='cursor-pointer gradient__text lowercase hover:border-b-4 hover:border-red-300'>Contact</a></p>

      </div>
    </div>
  )
}

export default Navbar