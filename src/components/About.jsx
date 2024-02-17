import React from 'react'
import Slider from './Slider'
import '../App.css'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <div className='w-screen h-[fit-content] bg-[#FFFFFF] flex flex-col m-[50px] lg:flex-row'>
        <div className='w-[50vw] h-[fit-content] flex flex-col justify-center items-center gap-10 mx-20 lg:mx-[0px]'>
            <div className='flex flex-col text-1xl items-center'>
                <h4 className='text-gray-600'>WELCOME TO 24 CARROTS</h4>
                <h1 className='text-[#1A4122] text-7xl w-[450px]
                m-10'>Remarkable Catering & Events</h1>

                <p className='text-gray-400 w-[450px] text-center'>24 Carrots is the premier catering and events company of choice in Southern California. We create remarkable experiences by offering the finest quality foods and providing unsurpassed personalized service, driven by our passion for life’s special occasions</p>

                <button className='bg-orange-800 text-white hover:bg-orange-500 p-2 rounded-full m-5 flex gap-5'>Get in Touch
                    <FaArrowRight className='mt-1 transform 0.3s ease'/>
                </button>
            </div>
        </div>
        <Slider />
    </div>
  )
}

export default About