import React from 'react'
import { BallCanvas } from './canvas'
import SectionWrapper from '../hoc'
import { technologies } from '../constants'

const Tech = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
      {technologies.map((technology)=> (
        <div className='w-28 h-32 flex flex-col items-center' key={technology.name}>
          <BallCanvas icon={technology.icon}/>
          <p className='text-white mt-2'>{technology.name}</p>
        </div>
      ))}

    </div>
  )
}

export default SectionWrapper(Tech, "tech");