import Header from './components/Header'
import { useState, useEffect } from 'react'
import './App.css'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Resume from './components/Resume'
import Contect from './components/Contact'
import Footer from './components/Footer'
import loadingAnimation from './assets/loading-animation.gif'
import Certificates from './components/Certificates'
import Skills from './components/Skills'




function App() {

  const [isLoading, setIsLoading] = useState(true);

  useEffect(()=>{
    function loadingTimer(){
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
    };
    loadingTimer();
  },[])
  

  return (
    <>
     {isLoading ? (
      
      <div className='flex justify-center items-center h-screen bg-primary'>
        <img
        src={loadingAnimation} // Update this path to your GIF location
        alt="Loading..."
        className="w-40 h-40 object-contain" // Adjust size as needed
      />
      </div>

     ):(
      <>
      <Header/>
      <Hero/>
      <Skills/>
      <About/>
      <Projects/>
      <Certificates/>
      <Resume/>
      <Contect/>
      <Footer/>
      </>
     )}
    </>
  )
}

export default App
