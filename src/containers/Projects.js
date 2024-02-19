import React from 'react'
import Project from '../components/Project'
import  {projects} from '../dummydata'

const Projects = () => {
  return (
    <div className='section__padding' id="projects">
      <div className='flex justify-center items-center mt-14 '>
        <div className=' border border-purple-300 w-[25%]'></div>
        <div>
          <h1 className='text-4xl gradient__text text-center font-bold flex flex-nowrap wow fadeInUp uppercase mx-7'>Projects i've been involved</h1>
        </div>
        <div className='border border-orange-400 w-[25%]'></div>

      </div>
      
          <div className=' grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-4 gap-6 mt-10'>
            {projects.map((item , i) => (
                          
                <Project title={item.title} description={item.description} image={item.image} link={item.link} />
                          
            )
              )}
          </div>

    </div>
  )
}

export default Projects