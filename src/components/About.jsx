import React from 'react'
import aboutMeImg from '../assets/aboutme-img.png';



const About = () => {
  

  return (
    <section id='about' className='mx-5 rounded-2xl shadow-2xl flex flex-col md:flex-row justify-center items-center h-auto md:h-screen bg-4 pb-10'>
        <div className='md:w-1/2 mt-14'>
            <img src={aboutMeImg} className='object-cover h-[230px] w-[320px] md:h-[307px] md:w-[427px] m-auto bounce'/>
        </div>
        <div className='md:w-1/2 md:m-auto mt-10 flex flex-col justify-center items-center '> 
            <h1 className='mb-7 text-xl md:text-3xl font-bold text-secondary border-b-4 border-[#387478]' >About me</h1>
            <div className='text-sm md:text-sm px-10 text-gray-600 font-monospace'>
                    I am <spane className='text-secondary font-bold'>Jazim Ahmed</spane>, a passionate <spane className='text-secondary font-bold'>Full Stack Developer</spane> with a love for building dynamic and responsive web applications.
                I specialize in connecting the dots between front-end and back-end development to create seamless user experiences.
                When I'm not coding, I enjoy learning new technologies and improving my skills to keep up with the fast-paced tech world.
            </div>
        </div>
    </section>
  )
}

export default About
