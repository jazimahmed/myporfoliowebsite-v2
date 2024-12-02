import React,{useState} from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

const Header = () => {
    const [toggle,setToggle] = useState(false);
  return (
    <div className='m-5 '>
      <div className='flex justify-between px-5 bg-secondary py-6 h-20 rounded-xl shadow-2xl'>
      <a href='#' className='font-bold text-white'><h1 className='sm:text-2xl'>My Portfolio</h1></a>
      
        <nav className='hidden md:block font-monospace '>
            <ul className='flex text-white'> 
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Projects</a></li>
                <li><a href='#certificates'>Certificates</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contect</a></li>
            </ul>    
        </nav>
        {toggle && <nav className='block md:hidden  mobile-menu '>
            <ul onClick={()=>setToggle(!toggle)} className='flex flex-col text-white gap-3 font-monospace'> 
                <li><a href='#home'>Home</a></li>
                <li><a href='#about'>About</a></li>
                <li><a href='#projects'>Project</a></li>
                <li><a href='#certificates'>Certificates</a></li>
                <li><a href='#resume'>Resume</a></li>
                <li><a href='#contact'>Contect</a></li>
            </ul>    
        </nav>}
        <button onClick={()=>{setToggle(!toggle)}} className='block md:hidden'>
            <Bars3Icon className='text-white h-5'/>
        </button>
      
    </div>
    </div>
  )
}

export default Header
