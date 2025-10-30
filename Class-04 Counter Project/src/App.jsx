import React, { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0)

  const increase = () => {
    setNum(num+1);
  }

  return (
    <div className='p-20'>
      <h1 className='text-4xl font-bold'>Click the button to increate the value: <span className='text-red-500 text-8xl'>{num}</span></h1>
      <button onClick={increase} className='bg-blue-500 rounded-lg px-10 py-2 text-white text-xl font-bold mt-5'>Increase</button>
    </div>
  )
}

export default App