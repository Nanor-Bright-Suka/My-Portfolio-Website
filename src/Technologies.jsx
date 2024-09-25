import React from 'react'
import { RiReactjsLine } from 'react-icons/ri'
import { SiJavascript, SiTailwindcss, SiTypescript } from 'react-icons/si' 
export default function Technologies() {
  return (
    <div>
      <h2 className='text-center text-5xl my-10'>
        Technologies
      </h2>
      <div className='flex justify-center items-center gap-10 '>
            <div className='border-neutral-800'>
              <RiReactjsLine  className='text-cyan-300 text-7xl bg-neutral-800 rounded-md' />
            </div>
            <div className='border-neutral-800'>
              <SiTailwindcss  className='text-cyan-300 text-7xl bg-neutral-800 rounded-md' />
            </div>
            <div className='border-neutral-800 '>
              <SiJavascript  className='text-yellow-300 text-7xl bg-neutral-800 rounded-md' />
            </div>
            <div className='border-neutral-800'>
              <SiTypescript  className='text-blue-400 text-7xl bg-white rounded-md text-center ' />
            </div>
      </div>
    </div>
  )
}
