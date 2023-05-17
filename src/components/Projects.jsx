import React from 'react'
import ProjectItem from './ProjectItem'
import moneyTrackingApp from '../assets/moneyTrackingApp.png'
import glowingButton from '../assets/glowingButton.gif'
import todoList from '../assets/todoList.gif'
import twitchImg from '../assets/twitch.png'


const Projects = () => {
  return (
    <div id='projects' className='max-w-[1040px] m-auto md:pl-20 p-4 py-16'>
        <h1 className='text-4xl font-bold text-center text-[#001b5e]'>Projects</h1>
        <p className='text-center py-8'>
            Projects and little gaggets I have made
        </p>
        <div className='grid sm:grid-cols-2 gap-12'>
            <ProjectItem img={glowingButton} title='Glowing Button' link='https://github.com/geekqq/buttondemo' />
            <ProjectItem img={moneyTrackingApp} title='Money Tracking App' link='https://iscuu.com/moneytracking.html' />
            <ProjectItem img={todoList} title='Todo List App' link='https://github.com/geekqq/todolist' />
            <ProjectItem img={twitchImg} title='Twitch App' link='https://github.com/geekqq/buttondemo' />
        </div>
    </div>
  )
}

export default Projects
