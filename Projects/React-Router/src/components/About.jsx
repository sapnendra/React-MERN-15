import React from 'react'

const About = () => {
  return (
    <div className='border border-gray-700 rounded-4xl mt-10 flex items-center justify-center'>
        <div className="w-1/2 px-15 py-30 flex flex-col gap-6">
            <h1 className='text-7xl font-bold bg-linear-to-r from-amber-400 to-amber-600 text-transparent bg-clip-text'>Sapnendra Jaiswal</h1>
            <h2 className='mb-10 text-5xl text-gray-500 font-semibold'>I am a Software Developer</h2>
            <p className='mt-5 text-gray-500 text-3xl'>I am lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <div className="w-1/2 flex flex-col gap-6">
            <div className="h-full w-full flex items-center justify-center">
                <img className='h-130 w-130' src="/about.svg" alt="" />
            </div>
        </div>
    </div>
  )
}

export default About