import React from 'react';
import { RiExternalLinkLine } from "react-icons/ri";

const CertificateCard = (props) => {
  return (
    <div className='flex flex-col justify-center items-center pt-0'>
      <div className='mb-10'>
        <div 
          className={`relative w-60 h-80 border-amber-300 border-2 rounded-2xl hover:border-white border-opacity-30 
                      hover:w-[${props.width}px] hover:ease-in-out hover:duration-300 
                      shadow-2xl hover:shadow-darker`} 
        >
          <img src={props.img} alt="Card" className="w-full h-full object-cover rounded-2xl" />

          <div>
            <a href={props.link} target='blank' className='absolute top-2 right-2'>
              <RiExternalLinkLine size={20} />
            </a>
          </div>
        </div>
      </div>

      <div className='w-60'>
        <p className='text-center w-full font-monospace overflow-hidden text-ellipsis'>{props.title}</p>
      </div>
    </div>
  );
};

export default CertificateCard;
