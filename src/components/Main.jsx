import React from "react";
import { TypeAnimation } from "react-type-animation";
import {FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaWordpress} from 'react-icons/fa';
import JoyBack from '../assets/JoyBack.jpg'

const Main = () => {
    return (
        <div id='main'>
            <img className="w-full h-screen object-cover object-left scale-x-[-1]" src={JoyBack} alt="/" />
            <div className="w-full h-screen absolute top-0 left-0 bg-white/50">
                <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
                    <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">I'm Stone Hoo</h1>
                    <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
                        I'm a 
                        <TypeAnimation
                            sequence={[
                                'Father of three',
                                2000,
                                'Geek',
                                2000,
                                'Developer',
                                2000,
                                'Coder',
                                2000,
                                'Tech Enthusiast',
                                2000,
                            ]}
                            wrapper="div"
                            cursor={true}
                            repeat={Infinity}
                            style={{ fontSize: '1em', paddingLeft: '5px'}}
                        />
                    </h2>
                    <div className="flex justify-between pt-6 max-w-[200px] w-full">
                        <a href="https://twitter.com/stonehoo" target="_blank" rel="noopener noreferrer">
                        <FaTwitter className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.facebook.com/stonehoo" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.instagram.com/stonehoo" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.linkedin.com/in/stonehoo" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://github.com/geekqq" target="_blank" rel="noopener noreferrer">
                            <FaGithub className='cursor-pointer' size={20} />
                        </a>
                        <a href="https://www.stonehoo.me" target="_blank" rel="noopener noreferrer">
                            <FaWordpress className='cursor-pointer' size={20} />
                        </a>
                    </div>
                </div>
                    
            </div>
        </div>
    )
}

export default Main