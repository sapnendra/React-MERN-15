import React from 'react'

const Input = () => {

  return (
    <div className='w-[60%]'>
        <form className='w-full flex justify-between p-4 gap-2'>
            <input className='border border-gray-600 text-xl rounded-xl px-5 py-3 cursor-pointer text-white' type="text" placeholder='Enter task...' />

            <input className='px-5 py-2 rounded-lg cursor-pointer bg-blue-600 font-bold text-white' type="submit" value="Submit" />
        </form>
    </div>
  )
}

export default Input