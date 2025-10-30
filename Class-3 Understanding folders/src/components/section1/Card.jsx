import React from 'react'

const Card = () => {
  return (
    <div className="h-[90%] w-[300px] bg-white rounded-3xl relative overflow-hidden">
        <img className='h-full w-full object-cover' src="https://images.unsplash.com/photo-1724627559656-9652a42c7e91?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687" alt="" />
        <div className='absolute top-0 left-0 h-12 w-12 bg-white rounded-full flex justify-center items-center font-bold'><span>1</span></div>
    </div>
  )
}

export default Card