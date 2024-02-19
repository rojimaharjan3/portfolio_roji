import React, { useEffect } from 'react'
const isServer = typeof window === 'undefined'
const WOW = !isServer ? require('wow.js') : null

const About = () => {

  useEffect(() => {
    new WOW(
      { live: false }
    ).init();
  }, [])
  return (
    <div className=' gradient_bg section__padding ' id="about">
      <div className='flex flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-row justify-center items-center my-7'>
        <div className=''>
          <img src='/images/roji.jpg' alt="" className='h-[150px] w-[150px] object-cover rounded-full '></img>
        </div>
        <div className='ml-20 space-y-10'>
          <div>
            {/* <h1 className='text-4xl font-bold text-slate-700'>Profile</h1> */}
            <p className='mt-5 w-[500px] md:w-[700px] lg:w-[900px] text-slate-600 text-lg leading-xl'>I've completed my bachelor's degree in Bachelor of Engineering in Information Technology. I have quite good knowledge of ReactJS, Hooks, Redux and React framework Next.js. I have been learning
              integration of backend and frontend aspects of the application, thus acquiring good knowledge of both
              Axios and Fetch. I have knowledge of UI development using TailiwindCSS. I have good understanding of
              common package managing tools as npm, yarn. I have ability to work with others through GIT and
              Github/ Gitlab.</p>

          </div>
          <div className=''>
            <span className='border-none m-auto px-6 py-3 shadow-lg bg-white rounded-md hover:text-zinc-700 hover:shadow-inner'><a href='/file/Resume.pdf' target="blank">resume</a></span>
          </div>
         
        </div>

      </div>
         
    </div>
  )
}

export default About