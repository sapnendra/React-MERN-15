import React from 'react'
import HeroLeft from './HeroLeft'
import HeroRight from './HeroRight'

const Hero = () => {
  return (
    <div className='h-[86vh] flex gap-5 pt-20 px-30'>
        <HeroLeft />
        <HeroRight />
    </div>
  )
}

export default Hero