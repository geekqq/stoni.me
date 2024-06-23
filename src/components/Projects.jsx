import React from 'react'
import ProjectItem from './ProjectItem'
import getweather from '../assets/getweather.png'
import glowingButton from '../assets/glowingButton.gif'
import todoList from '../assets/todoList.gif'
import springBoot from '../assets/springBoot.png'
import portfolio from '../assets/portfolio2.png'
import minicommerce from '../assets/miniecommerce.png'

const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Projects and little gadgets I made
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={glowingButton} title='Glowing Button' techStack='React Tailwind CSS' link='https://github.com/geekqq/buttondemo' />
            <ProjectItem img={getweather} title='Get Weather App' techStack='JavaScript HTML CSS' link='https://weather.ski.sh' />
            <ProjectItem img={todoList} title='Todo List App' techStack='React NodeJS' link='https://github.com/geekqq/todolist' />
            <ProjectItem img={springBoot} title='Spring Boot App' techStack='Spring Boot Docker Eureka' link='https://github.com/geekqq/nvsoftware' />
            <ProjectItem img={portfolio} title='React JS App' techStack='React Tailwind CSS' link='https://github.com/geekqq/portfolio-react' />
            <ProjectItem img={minicommerce} title='React JS ecommerce demo' techStack='React Tailwind Full Stack ' link='https://github.com/geekqq/mini-ecommerce' />
        </div>
    </div>
  )
}

export default Projects
