import React from 'react'
import Profile from "../assets/Profile.png"
const Hero = () => {
  return (
    <div className='border-b border-neutral-900 mt-20'>
     <div className='flex flex-wrap items-center justify-around mb-10'>
            <div className='flex flex-col max-[600px]:m-3'>
                    <h1 className='pb-10 text-6xl font-thin tracking-tight lg:mt-16 lg:text-8xl'>Nanor Bright</h1>
                    <span className='bg-gradient-to-r from-neutral-500 to-neutral-300 bg-clip-text text-transparent text-4xl tracking-tight'>Frontend Developer</span>
                    <p className='max-w-xl my-2 py-6  tracking-normal text-lg font-normal '>
                      
                      I am an aspiring frontend developer with a strong passion for building dynamic and responsive user interfaces. I have gained knowledge in modern technologies such as React, TypeScript, Tailwind CSS, and React Router, and I’m continuously expanding my understanding to stay current with industry trends.

                        Driven by curiosity and a deep desire to solve complex problems, I enjoy the challenge of learning new frontend technologies and applying them to real-world projects. My goal is to become a versatile developer, capable of creating intuitive and visually appealing web applications that enhance user experience.

</p>
            </div>
            <img src={Profile} className='rounded-xl flex justify-center'/>
     </div>
    </div>
  )
}

export default Hero
