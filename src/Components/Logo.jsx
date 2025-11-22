import React from 'react'
import { defaultMe } from '../../public/assets'

function Logo() {
  return (
    <div className='flex items-center justify-between gap-2'>
          <img
          src={defaultMe} 
        className="w-10 h-10 border-2 border-blue-500 rounded-[35px]"
        />
        <h2 className='text-white font-bold text-[25px] items-center'>
          Sheriff
        </h2>
        </div>
  )
}

export default Logo