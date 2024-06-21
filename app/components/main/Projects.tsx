import React from 'react'
import ProjectCard from '../sub/ProjectCard'

const Projects = () => {
  return (
    <section 
    id='projects'
    className='flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20 z-20'
    style={{transform: "scale(0.9"}}
    >
    <div className='flex flex-col items-center justify-center py-20'>
        <h1 className='text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20'>
            My Projects
        </h1>
          <div className='h-full w-full flex flex-col md:flex-row gap-10 px-10'>
          <ProjectCard
          src="/python-logo-only.svg"
          title="ML Test Projects"
          description="Created a few test projects to learn more about machine learning. Had help from a few tutorials and AI models."
          link="https://github.com/MatthijsDV2004/Test-Projects"
        />
        <ProjectCard
          src="/python-logo-only.svg"
          title="Random Python Projects"
          description="Growing collection of random Python projects. Some are from tutorials, others are my own creations."
          link="https://github.com/MatthijsDV2004/Python-Projects"
        />
        <ProjectCard
          src="/github.svg"
          title="Portfolio link"
          description="Created with Next.js using React components written using TypeScript."
          link="https://github.com/MatthijsDV2004/spaceportfolio"
        />
          </div>

    </div>
    </section>
  )
}

export default Projects