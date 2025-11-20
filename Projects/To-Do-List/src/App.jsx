import React from 'react'
import Input from './components/Input'
import List from './components/List'

const App = () => {
  return (
    <div className='h-screen bg-[#111] flex flex-col items-center gap-10 justify-center'>
      <h1 className='text-4xl text-white font-bold uppercase'>To-DO List</h1>
      <div className="">
        <Input />
        <List />
      </div>
    </div>
  )
}

export default App