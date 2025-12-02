import React, { useContext } from 'react'
import { MyContext } from '../context/MyContext'

const Bin = () => {
    const { setBinFlag} = useContext(MyContext);
  return (
   <div className='bin h-100 w-150 rounded-sm bg-white absolute top-10 right-60'>
        <div className="w-full flex items-center justify-between border-b border-gray-300">
            <img src="./recycle.png" />
            <div className="flex items-center gap-4">
                <button className='bg-blue-500 px-4 py-1 rounded-md font-bold text-white'>Max</button>
                <button onClick={() => setBinFlag(prev => !prev)} className='bg-blue-500 px-4 py-1 rounded-md font-bold text-white'>Min</button>
            </div>
        </div>
    </div>
  )
}

export default Bin