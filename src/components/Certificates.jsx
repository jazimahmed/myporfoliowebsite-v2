import React from 'react'
import sqlcertificate from '../assets/sql-basic-certificate.png'
import udemyangelacertificate from '../assets/udemy-angela-certificate.png'
import CertificateCard from './CertificateCard'


const Certificates = () => {
    const config = [
        {
            title : "Hacker rank sql basic certificate 2024" ,
            img : sqlcertificate,
            link : "https://www.hackerrank.com/certificates/9f0ef2229025"
        },
        {
            title : "Complete Web Development Bootcamp certificate" ,
            img : udemyangelacertificate,
            link : "https://www.udemy.com/certificate/UC-004366d0-82c1-402e-9af9-724847c4dad0/"
        }
    ]

  return (
    <section id='certificates' className='mx-5 shadow-2xl md:h-screen h-auto bg-4 flex flex-col pb-5 md:pb-0  items-center'>
       
            
        <div className='mt-10'><h1 className='font-bold text-3xl text-secondary'>Certificates</h1></div>
        <div className='flex flex-col gap-7 mt-14 md:flex-row flex-wrap mx-20 '>
            {config.map((certificate)=>{
                return(
                    <CertificateCard width='500' title={certificate.title} img={certificate.img} link={certificate.link}/>
                );
            })}
            
        </div>
    </section>
  )
}

export default Certificates
