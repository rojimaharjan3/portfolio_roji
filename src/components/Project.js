import React from 'react'

import { FaExternalLinkSquareAlt } from 'react-icons/fa'

const Project = ({title , description , image , link}) => {
  return (
   
      
      <div className='w-full h-full flex flex-col border shadow-lg duration-500 hover:-translate-y-3 hover:duration-700 hover:ease-linear' >
        
        <div className='w-full h-full flex justify-center'>
          <img src={image} alt={title} className="flex-0.5 w-full object-contain"></img>
        </div>
      <div className='flex flex-col flex-1 justify-between h-full px-7'>
          <div className=''>
            <h2 className='text-2xl font-semibold'>{title}</h2>
            <p className='mt-5'>{description }</p>

        </div>
      </div>
        <a href={link} target="blank" className='my-12 text-xl flex justify-center'><FaExternalLinkSquareAlt /></a>
       
        

    
      
          
    </div>
  )
}

export default Project