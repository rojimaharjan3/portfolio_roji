import React, { useEffect } from 'react'

import { MdOutlineWavingHand } from 'react-icons/md';
import { RiSingleQuotesR, RiSingleQuotesL } from 'react-icons/ri'
import { socialData } from '../dummydata'

const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null



const Header = () => {

    useEffect(() => {
        new WOW(
            { live: false }
        ).init();
    }, [])

  return (
      <div className='flex flex-col mt-10 items-center h-[80vh]' id="home">
          <h1 className='flex font-semibold space-x-3 text-3xl items-center'>
              <MdOutlineWavingHand className='hover:origin-bottom hover:-rotate-12'/>
              <h1>HI, I AM</h1>
          </h1>
          <h1 className='gradient__text text-7xl font-bold mt-5'>Roji Maharjan</h1>
          <h1 className='text-3xl font-semibold mt-5 flex items-center gap-3'>
              <span>A</span>
              <ul className='h-[90px] leading-[90px] overflow-hidden'>
                  <li className='relative top-0 animate-slide-animation'>
                      <span className='relative gradient__text leading-[80px] my-[5px] after:content-[""] after:absolute after:left-0 after:top-1 after:h-full after:w-full after:bg-white after:border-l-2 after:border-purple-400 after:animate-typing-animation'>
                          FrontEnd</span></li>
                  <li className='relative top-0 animate-slide-animation'>
                      <span className='relative gradient__text leading-[80px] my-[5px]  after:content-[""] after:absolute after:left-0 after:top-1 after:h-full after:w-full after:bg-white after:border-l-2 after:border-purple-400 after:animate-typing-animation'>
                          React</span></li>
                  {/* <li className='relative top-0 animate-slide-animation'>
                      <span className='relative leading-[80px] my-[5px]  after:content-[""] after:absolute after:l-0 after:h-full after:w-full after:bg-white after:border-l-[2px] after:border-b-indigo-500 after:animate-typing-animation'>
                          Next</span></li> */}
              </ul>
              <span>Developer</span></h1>
          <p className='w-[900px] text-xl mt-10 flex'>
              <span><RiSingleQuotesL /></span>
              <h1 className='max-auto flex'>I’m self-motivated programmer and have an interest in bringing the wireframes of the UX designer to life as well as collaborating with Back End Developers to create a finished product.<span className='relative'><RiSingleQuotesR /></span></h1>
              
          </p>
          <hr className='border-gradient__bg w-[40%] my-[24px] mx-auto'/>
          <ul className='flex space-x-5 mt-10 text-3xl'>
              {socialData.map((item, i) => {
                  return (
                      <li key={item.name} className="hover:bg-gradient__text hover:-translate-y-1 hover:duration-900 duration-700 wow fadeInUp" data-wow-delay={0.15 * i + 's'} >
                          <a href={item.url} target="_blank">{item.icon}</a>
                      </li>
                  )
              })}
              
              
          </ul>
          
    </div>
  )
}

export default Header