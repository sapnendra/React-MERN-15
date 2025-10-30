import React from 'react'
import Card from './Card'

const HeroRight = () => {
  return (
    <div className='h-full w-2/3 flex gap-5 shrink-0 overflow-x-auto px-5'>
        <Card />
        <Card />
        <Card />
    </div>
  )
}

export default HeroRight