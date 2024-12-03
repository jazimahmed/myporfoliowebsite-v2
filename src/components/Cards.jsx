import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io"; 
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaNode } from "react-icons/fa";



const Cards = (props) => {
  // State to toggle details visibility
  const [details, setDetails] = useState(false);
  

  // Function to toggle details
  const toggleDetails = () => {
    setDetails(prevState => !prevState);
  };

  return (
    <div className='flex flex-col justify-center items-center'>
        <div onMouseLeave={()=>setDetails(false)} className='mb-10 '>
      <div  className="shadow-xl relative w-40 h-56 md:w-44 md:h-64 border-amber-300 border-2 rounded-2xl hover:border-white border-opacity-30 hover:md:w-[450px] hover:w-[300px] hover:ease-in-out hover:duration-300 hover:shadow-darker">
        <img src={props.img} alt="Card" className="w-full h-full object-cover rounded-2xl" />
        
        {/* Button to toggle details with an info icon */}
        <button 
          onClick={toggleDetails}
          className="absolute top-2 right-2 text-white bg-black p-2 rounded-full">
          <IoIosInformationCircle size={20} /> {/* Info icon */}
        </button>
        
        {/* Details section */}
        {details && (
          <div className='absolute inset-0 bg-black bg-opacity-60 flex flex-col justify-center items-center  rounded-2xl transition duration-300 '>
            <h3 className="text-white text-xl md:text-2xl font-bold text-center">{props.title}</h3>
            <p className="text-gray-300 mt-2 text-center px-4 text-xs md:text-sm">{props.description}</p>
            
            <div className='flex flex-row text-white gap-2 md:m-3 m-1'>
              {props.tw && <RiTailwindCssFill size={20}/>}
              {props.react && <FaReact size={20}/>}
              {props.mongo && <SiMongodb size={20}/>}
              {props.express && <SiExpress size={20}/>}
              {props.node && <FaNode size={20}/>}
              
            </div>

          

            
            <a 
              type="button" 
              href={props.link}
              target='blank'
              className="flex flex-row mt-1 md:mt-5 w-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <IoLogoGithub size={20} /><p className='ml-2'>Code</p>
            </a>
          </div>
          
        )}
      </div>
     
    </div >
        <div className='w-44'>
            <p className='text-center w-full font-monospace overflow-hidden text-ellipsis text-white '>{props.title}</p>
        </div>
    </div>
  );
};

export default Cards;
