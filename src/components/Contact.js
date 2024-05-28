import React from 'react'
import { socialData } from '../dummydata'

const Contact = () => {
  return (
    <div className='section__padding mt-14 mb-14' id="contact">
      <div className='flex justify-center items-center'>
        <div className=' border border-purple-300 w-full  ml-14'></div>
        <div>
          <h1 className='text-4xl gradient__text font-bold wow fadeInUp uppercase mx-7'>Contact</h1>
        </div>
        <div className='border border-orange-400  w-full  ml-14'></div>

      </div>
      <div className='flex justify-center'>
        <ul className='flex space-x-5 mt-10 text-3xl'>
          {socialData.map((item, i) => {
            return (
              <li key={item.name} className="hover:bg-gradient__text hover:-translate-y-1 hover:duration-900 duration-700 wow fadeInUp" data-wow-delay={0.15 * i + 's'} >
                <a href={item.url} target="_blank" rel="noreferrer">{item.icon}</a>
              </li>
            )
          })}


        </ul>
      </div>
    </div>
  )
}

export default Contact