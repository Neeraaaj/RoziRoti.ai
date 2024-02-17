import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import Slider3 from './Slider3'

const Venues = () => {
  return (
    <div className='flex flex-col w-full h-fit mt-20'>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/unforegetable-banner.png' className='object-cover w-[150vw]'/>
        <div className='w-[50vw] h-[33vh] lg:w-[40vw] lg:h-[125vh] bg-white rounded-full flex flex-col text-center mt-[-12vh] lg:mt-[-25vh] mx-auto '>
            <p className='font-sans text-[#1A4122] mt-[8vh] h-fit lg:mt-[25vh]
            text-3xl '>VENUES</p>
        </div>
            <h1 className='text-4xl text-[#1A4122] mt-[-15vh] lg:text-7xl 
            text-center lg:mt-[-90vh] w-[100vw] lg:w-[45vw] bg-white mx-auto'>Unforgettable Venues</h1>
            <p className='text-gray-500 text-center w-[fit] mx-auto m-5 lg:w-[40vw]'>24 Carrots is the exclusive or preferred caterer at Southern California’s most spectacular properties. From intimate understated spaces to large and luxurious, we’ll help you find the event venue that makes your heart skip a beat.</p>
            <button className='text-white bg-orange-700 hover:bg-orange-500 w-[35vw] mx-auto p-2 rounded-full flex gap-1 justify-center lg:w-[15vw]'> 
                EXPLORE VENUES <FaChevronRight className='mt-1'/>
            </button>

            <Slider3 />
    </div>
  )
}

export default Venues