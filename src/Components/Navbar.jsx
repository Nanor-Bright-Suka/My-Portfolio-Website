import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaLinkedinIn } from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'
import { FaEnvelope } from 'react-icons/fa'

const Navbar = () => {
  return (
    <div>
        <div className='flex items-center justify-between p-5'> 
        <div className='text-3xl'>
            Home
        </div>
        <div className='flex gap-5  justify-center'> 
    <a href='https://github.com/Nanor-Bright-Suka'>
    <FaGithub size={30}/> 
    </a> 
    <a href='https://www.linkedin.com/in/nanor-bright/'>
    <FaLinkedinIn size={30}/>  
    </a>
    <a href="mailto:brightnanor19@gmail.com" target="_blank" rel="noopener noreferrer">
    <FaEnvelope size={30}/>
    </a> 
    </div> 
    </div>
    </div>
  )
}

export default Navbar
