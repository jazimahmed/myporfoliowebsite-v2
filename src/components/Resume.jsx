import React from 'react'
import resume from '../assets/resume-img.png';
const API_KEY = import.meta.env.VITE_REACT_APP_RESUME_DRIVE_URI;



const Resume = () => {
    
  return (
    <section id='resume' className='mx-5 shadow-2xl flex flex-col md:flex-row justify-center items-center h-auto md:h-screen bg-5 pb-10'>
        <div className='md:w-1/2 md:m-auto mt-10 flex flex-col justify-center items-center'> 
            <h1 className='mb-7 text-xl md:text-3xl font-bold text-black border-b-4 border-white' >Resume</h1>
            <div className='text-xs md:text-sm px-10 text-black font-monospace'>
                    you can 
                    <a href={API_KEY} 
                    download='jazims-resume.pdf'
                    target="_blank"
                    className='bounce inline-block text-center bg-primary text-amber-300 rounded-lg font-bold  w-40 h-7 py-2 hover:bg-teal-500 ml-4'>Download / Review</a> 👈 my resume here
            </div>
        </div>
        <div className='md:w-1/2 mt-14'>
            <img src={resume} className='object-cover h-[230px] w-[320px] md:h-[307px] md:w-[427px] m-auto rounded-3xl'/>
        </div>
        
    </section>
  )
}

export default Resume
