import React from 'react'
import '../App.css'
import { FaChevronRight } from 'react-icons/fa'
import Slider4 from './Slider4'

const Services = () => {
  return (
    <div className='bg-[#FFFFFF] flex mt-[-35vh] p-20 flex-col'>
            <h1 className='text-4xl lg:text-8xl text-[#1A4122] text-center mx-auto mt-[25vh] w-[50vw]'>Great Food & A Whole Lot More</h1>
            <p className='text-gray-500 w-[55vw] text-center mx-auto mt-10'>Catering is just the beginning. Sure, we love astonishing your guests with attentive service, thoughtful food, and an inviting environment. But what really matters most is helping you create memories that will last for a lifetime. Our industry experts think of all the little things that turn an ordinary event into an unforgettable experience.</p>

            <button className='bg-orange-700 hover:bg-orange-500 text-white flex w-[45vw] gap-2 lg:w-[15vw] items-center justify-center rounded-full mx-auto mt-10'>
                EXPLORE SERVICES <FaChevronRight className='mt-1'/>
            </button>

            <div className='flex flex-col lg:flex lg:flex-row mt-[25vh] bg-white p-2 gap-[150px] mx-auto '>
                <div className='fkex flex-col w-[fit-content] lg:w-[20vw]'>
                    <div className='flex flex-col gap-5'>
                        <h1 className='text-3xl text-[#1A4122]'>Gourmet Catering</h1>
                        <p>Our professionally-trained culinary team is passionate and proud of our diverse and thoughtful menu, always cooking up something that aligns with your great taste.</p>

                        <button className='bg-transparent border-2 border-orange-400 text-orange-500 rounded-full p-1 
                        w-[35vw] lg:w-[12vw]'>LEARN MORE</button>
                    </div>
                    <div className='mt-5 flex flex-col gap-5'>
                        <h1 className='text-3xl text-[#1A4122]'>Bar Service</h1>
                        <p>Our sophisticated flavor expertise enables us to create inventive concoctions that generate buzz in more ways than one!</p>

                        <button className='bg-transparent border-2 border-orange-400 text-orange-500 rounded-full p-1 
                        w-[35vw] lg:w-[12vw]'>LEARN MORE</button>
                    </div>
                </div>
                <img src='https://24carrots.com/wp-content/uploads/2023/10/Home_Services_GIF_R3.gif'
                    className='rounded-t-full w-[fit-content] lg:w-[20vw] h-[65vh]'
                />
                <div className='fkex flex-col w-[fit-content] lg:w-[20vw]'>
                    <div className=' flex flex-col gap-5'>
                        <h1 className='text-3xl text-[#1A4122]'>Staffing</h1>
                        <p>The hand-selected team at 24 Carrots are just as important to our reputation as our gourmet food. Our staff is certainly the best at what they do, and you’ll work with professionals who genuinely care about the success of your event!</p>

                        <button className='bg-transparent border-2 border-orange-400 text-orange-500 rounded-full p-1 
                        w-[35vw] lg:w-[12vw]'>LEARN MORE</button>
                    </div>
                    <div className='mt-5 flex flex-col gap-5'>
                        <h1 className='text-[#1A4122] text-3xl'>Event Production</h1>
                        <p>If mind-blowing spectacles and immersive guest experiences are what you’re after, the specialists at 24 Carrots can pull it off on an epic scale!</p>

                        <button className='bg-transparent border-2 border-orange-400 text-orange-500 rounded-full p-1 
                        w-[35vw] lg:w-[12vw]'>LEARN MORE</button>
                    </div>
                </div>
            </div>
    </div>
  )
}

export default Services