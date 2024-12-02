import React,{useState} from 'react'
import Cards from './Cards'
import portfolioimg from '../assets/portfolio thumbnail.png'
import todopic from '../assets/todo-project-pic.png'
import blogpic from '../assets/blog-pic.png'

const Projects = () => {
    const projectConfig = [
        {
            title: 'My Portfolio using React and tailwind Css',
            img: portfolioimg,
            link: '',
            description: 'This is my personal portfolio built using React, Tailwind CSS, and JavaScript. It highlights my skills, projects, and journey as a Full Stack Developer.',
        },
        {
            title: 'todo-list-application-MERN',
            img:todopic,
            link: 'https://github.com/jazimahmed/MERN-PROJECTS.git',
            description: 'This is a To do list project built using React, Tailwind css, mongodb , express, Nodejs. simply we can add , edit and delete tasks and it would save to mongo database',
        },
        {
            title: 'simple blog page using MERN',
            img:blogpic,
            link: 'https://github.com/jazimahmed/MERN-PROJECTS.git',
            description: 'This is a simple blog project built using React, Tailwind css, mongodb , express, Nodejs. simply we can add , edit and delete blog posts and it would save to mongo database',
        }
    ];
    
  return (
    <section id='projects' className='mx-5 shadow-2xl md:h-screen h-auto bg-[#629584] flex flex-col  items-center pb-10'>
        <div className='mt-10'><h1 className='font-bold text-3xl text-white'>Projects</h1></div>
        <div className='flex flex-col gap-7 mt-14 md:flex-row flex-wrap mx-20 '>
        {projectConfig.map((project) => {
            return (
                <Cards 
                key={project.title} 
                width="500" 
                img={project.img} 
                title={project.title} 
                link={project.link}
                description={project.description} 
                />
            );
            })}
            
            
            
         </div>
            
        
    </section>
  )
}

export default Projects
