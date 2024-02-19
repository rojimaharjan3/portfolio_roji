import React from 'react'
import {skills} from '../dummydata'

const Skills = () => {
  return (
    <div className='section__padding' id="skills">
      <div className='flex justify-center items-center'>
        <div className=' border border-purple-300 w-full ml-14'></div>
        <div>
          <h1 className='text-4xl gradient__text font-bold wow fadeInUp uppercase mx-7'>SKILLS</h1>
        </div>
        <div className='border border-orange-400  w-full  ml-14'></div>

      </div>
      
      <div className='grid grid-cols-1 mx-20 md:grid-cols-2 md:mx-20 md:gap-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-6 space-y-5 items-center justify-center  mt-8 lg:mx-40'>
        {skills.map((item) => (
          <img src={item.icon } alt="" className='flex h-14'></img>
        ))}

        
      </div>
    </div>
  )
}

export default Skills