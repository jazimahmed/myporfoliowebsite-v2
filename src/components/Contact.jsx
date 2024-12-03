import React from 'react'
import contactmeimg from '../assets/contactme-img.png';



const Contect = () => {
  return (
    <section id='contact' className='mx-5 shadow-2xl flex flex-col md:flex-row justify-center items-center h-auto bg-secondary'>
        <div className='md:w-1/2 mt-14'>
            <img src={contactmeimg} className='object-cover h-[190px] w-[250px] md:h-[307px] md:w-[427px] m-auto bounce'/>
        </div>
        <div className='md:w-1/2 md:m-auto mt-10 flex flex-col justify-center items-center'> 
            <h1 className='mb-7 text-xl md:text-3xl font-bold text-white border-b-4 border-white mt-10' >Contact me</h1>
            <div className='text-xs md:text-sm px-10 text-white font-monospace'>
                    if you want to discuss more in detail contact me
            </div>
            <div className='mt-3 mb-10 rounded-xl  w-full p-8 font-monospace'>
                <form action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSfsDz0_PWz1kiggS2CnTDwEsNIKX6svvF0IqfePQttadC_V8g/formResponse" method="POST" target="_blank" className='flex flex-col  items-center gap-6'>
                    <input type="text" name="entry.164598736" placeholder="Your Name" required className=' shadow-lg w-full p-1 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300'/>
                    <input type="email" name="entry.141399079" placeholder="Your Email" required className='shadow-lg w-full p-1 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300'/>
                    <input type="text" name="entry.131342554" placeholder="Mobile Number" required className='shadow-lg w-full p-1 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300'/>
                    <textarea name="entry.258916657" placeholder="Your Message"  rows="3" required className='shadow-lg  overflow-hidden w-full h-auto p-1 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-amber-300'></textarea> 
                    <button className='bg-primary text-white rounded-lg font-bold border-2 border-white w-24 h-8 hover:bg-teal-500 ' type="submit">Send</button>
                </form>
            </div>
        </div>
    </section>
  )
}

export default Contect
