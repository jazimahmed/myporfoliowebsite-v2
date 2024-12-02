import React, { useState } from 'react';
import { IoLogoGithub } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaReact } from "react-icons/fa";
import { IoIosInformationCircle } from "react-icons/io"; // Add the info icon

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
      <div  className="shadow-xl relative w-60 h-80 border-amber-300 border-2 rounded-2xl hover:border-white border-opacity-30 hover:w-[600px] hover:ease-in-out hover:duration-300 hover:shadow-darker">
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
            <h3 className="text-white text-2xl font-bold">{props.title}</h3>
            <p className="text-gray-300 mt-2 text-center px-4 text-sm">{props.description}</p>

            <div className='flex flex-row justify-between gap-3 text-amber-300 my-4'>
              <FaReact size={20} />
              <RiTailwindCssFill size={20} />
            </div>
            
            <button 
              type="button" 
              className="flex flex-row mt-5 w-auto text-gray-900 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700">
              <IoLogoGithub size={20} /><p className='ml-2'>Code</p>
            </button>
          </div>
          
        )}
      </div>
     
    </div >
        <div className='w-60'>
            <p className='text-center w-full font-monospace overflow-hidden text-ellipsis text-white '>{props.title}</p>
        </div>
    </div>
  );
};

export default Cards;
