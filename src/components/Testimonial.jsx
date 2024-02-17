import React from 'react'
import Slider4 from './Slider4'
import { FaChevronRight } from 'react-icons/fa'

const Testimonial = () => {
  return (
    <div className='p-10 bg-[#1A4122] relative flex flex-col'>
        <div className='flex flex-col'>
            <h1 className='text-white text-6xl text-center mt-[20vh] font-extralight'>Our Happy Clients</h1>
            <p className='text-gray-400 mt-5 w-[50vw] mx-auto text-center'>Food may be our love language, but words of affirmation always make us ecstatic! Read what our happy clients have to say about how we made their day great.</p>
        </div>
        <Slider4 />

        <h1 className='text-white text-7xl mx-[15vw] lg:mx-auto mt-[20vh]'>What's Cookin'</h1>

        <div className='grid grid-cols-1 lg:grid-cols-2 w-[75vw] mx-auto 
        mt-[10vh] gap-[18vw]'>
            <div className='flex flex-col w-[75vw] lg:w-[45vw]  h-fit gap-2 '>
                <img src='https://24carrots.com/wp-content/uploads/2023/11/11.02.16-Foundsgiving-Studio-EMP-21-768x548.jpg'
                    className='w-[fit-content] h-[50vh] lg:w-[45vw] lg:h-[23vw] transform transition-transform duration-300 ease-in-out hover:scale-110'
                />
                <p className='bg-orange-700 text-white text-1xl 
                w-[45vw] lg:w-[15vw] p-3 rounded-[50px]  mt-5'>24 CARROTS CATERING CATERING</p>

                <h1 className='text-[#1A4122] text-2xl'>Setting Your Holiday Table</h1>

                <p className='text-gray-600 w-fit'>From the first inquiry to final details, we are proud to provide full-service catering, making you feel like a guest at your own event…</p>
            </div>
            <div className='flex flex-col  w-[75vw] lg:w-[30vw] h-fit gap-2 '>
                <img src='https://24carrots.com/wp-content/uploads/2023/09/11.13.19-ABC-Gala-2019-Villa-Visuals-7-scaled-1-768x512.jpg'
                    className='w-[fit-content] lg:w-[45vw] lg:h-[23vw] transform transition-transform duration-300 ease-in-out hover:scale-110'
                />
                <p className='bg-black text-white text-1xl 
                 w-[45vw] lg:w-[15vw] p-3 rounded-[50px]  mt-5'>24 CARROTS CATERING FETURED VENUES</p>

                <h1 className='text-[#1A4122] text-2xl'>The BEST Venues for Big Holiday Bashes</h1>

                <p className='text-gray-600 w-fit'>Make the most the holiday season by thinking BIG! Invite everyone from friends family, clients and the entire company to join in on the fun…</p>
            </div>
        </div>
        <div className='bg-[#FFFFFF] w-full mx-auto mt-[-150vh] lg:mt-[-50vh] flex items-center justify-center'>
        <button className='border-2 border-orange-400 p-2 rounded-full 
        w-[55vw] lg:w-[15vw] absolute text-orange-500 mt-[320vh] lg:mt-[140vh]'>
          MORE FROM THE BLOG
        </button>

        {/* <div className='flex flex-row w-[90vw] mt-[220vh] absolute mx-auto'>
            <div className='flex flex-col w-[45vw]'>    
                <h1 className=' bg-fuchsia-500
                text-7xl text-[#1A4122]'>Experiences Designed To Be Shared</h1>
            </div>
            <div className='w-[45vw] bg-fuchsia-700'>
                
            </div>
        </div> */}
      </div>
    </div>
  )
}

export default Testimonial