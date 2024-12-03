import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io5";
import { BiLogoGmail } from "react-icons/bi";
import heroimg from '../assets/heroimg.png'

const Hero = () => {
  return (
    <section id='home' className='mx-5 rounded-2xl shadow-2xl flex flex-col-reverse md:flex-row px-5 md:px-10 py-16 md:py-32 bg-2 h-auto md:h-screen items-center '>
        <div className='md:w-2/3 ' >
            <div className='md:mx-10 flex flex-col justify-center items-center rounded-3xl shadow-xl p-5 bg-secondary gap-3 md:gap-4 bounce '>
              <h1 className=' text-white font-bold text-2xl md:text-4xl m-2 text-center' >Hi, I'm Jazim Ahmed </h1>
              <p className=' font-bold text-lg md:text-3xl mb-2 font-monospace text-amber-300 text-center'>Im a full stack developer</p>
              <p className='text-slate-300 mb-2 text-center text-sm md:text-lg'>Linking Front-End with Back-End: Crafting Web Experiences from Ideas</p>
              <div className='flex space-x-3 mt- text-white '>
                  <a href='mailto:mohamedjazim800@gmail.com' className='hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.7)] hover:text-amber-300'><BiLogoGmail size={30}/></a>
                  <a href='https://github.com/jazimahmed?tab=repositories' className='hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.7)] hover:text-amber-300'><IoLogoGithub size={30}/></a>
                  <a href='https://www.linkedin.com/in/m-m-jazim-ahmed-3053822a2/' className='hover:shadow-[0_0_10px_3px_rgba(59,130,246,0.7)] hover:text-amber-300'><FaLinkedin size={30}/></a>
              </div>
            </div>
        </div>
        <div className='md:w-1/3 flex justify-center md:justify-start ml-5 mb-10 md:mb-0'>
        <img className='home-img '  src={heroimg}/>
        </div>
        
        
        
    </section>
  )
}

export default Hero
