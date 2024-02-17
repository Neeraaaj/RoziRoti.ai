import React, { useState } from 'react'
import Slider2 from './Slider2'
import '../App.css'
import { FaChevronRight } from 'react-icons/fa';

const Info = () => {
    const [isActive, setIsActive] = useState("weddings");
    const [isSelected, setIsSelected] = useState(isActive)

    const handleEventClick = (eventKey) => {
        setIsActive(eventKey);
        setIsSelected(eventKey)
      };
    const initialData = {
        weddings: {
          heading: 'Exceptional Weddings',
          content:
            'The most important day of your life, is ours too. Your wedding should be the ultimate celebration of your relationship, and our team of experts guide you through the process, offering peace of mind and a remarkable experience.',
        },
        social: {
          heading: 'Incomparable Social Events',
          content:
            'We sweat the small stuff, so you don’t have to. For all of life’s special occasions, we give your anniversary, shower, or birthday party the attention it deserves, allowing you to focus on being present with your guests!',
        },
        corporate: {
          heading: 'One-of-a-Kind Corporate Events',
          content:
            'Our job is to make you look good. From office lunches to large-scale corporate events, we’ve made our business out of making your business shine.',
        },
        venues: {
          heading: 'Exclusive Social Venues',
          content:
            'We don’t put you in a box. Each venue is unique to each party, and our curated list of event spaces and venue partners offers easy access with personalized service at Southern California’s premier locations.',
        },
      };
    
  return (
    <div className='flex flex-row w-screen h-fit mt-[0vh] lg:mt-[20vh]'>
        <div className='flex flex-col w-full h-fit lg:hidden'>
            <h1 className='text-[#1A4122] text-5xl items-center justify-center text-center p-5'>Making Every Experience Magical</h1>

            <div className='flex flex-col w-full h-fit'>
                <img src='https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg' className='w-[50vw] rounded-full mx-auto'/>
                <div className='flex flex-col w-full'>
                    <h1 className='text-5xl text-[#1A4122] text-center m-5'>Weddings</h1>
                    <h3 className='text-3xl text-center text-gray-800'>{initialData.weddings.heading}</h3>
                    <p className='text-center p-[8vh]'>{initialData.weddings.content}</p>
                    <button className='bg-orange-800 text-white p-3 rounded-full flex w-[35vw] items-center justify-center mx-auto
                    '>
                        LEARN MORE <FaChevronRight className='mt-0'/>
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full h-fit mt-4'>
                <img src='https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg' className='w-[50vw] h-[50vh] rounded-full mx-auto object-cover'/>
                <div className='flex flex-col w-full'>
                    <h1 className='text-5xl text-[#1A4122] text-center m-5'>Social</h1>
                    <h3 className='text-3xl text-center text-gray-800'>{initialData.social.heading}</h3>
                    <p className='text-center p-[8vh]'>{initialData.social.content}</p>
                    <button className='bg-orange-800 text-white p-3 rounded-full flex w-[35vw] items-center justify-center mx-auto
                    '>
                        LEARN MORE <FaChevronRight className='mt-0'/>
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full h-fit mt-4'>
                <img src='https://24carrots.com/wp-content/uploads/2023/10/2.3-Corporate-Joel-Maus.jpg' className='w-[50vw] h-[50vh] rounded-full mx-auto object-cover'/>
                <div className='flex flex-col w-full'>
                    <h1 className='text-5xl text-[#1A4122] text-center m-5'>Corporate</h1>
                    <h3 className='text-3xl text-center text-gray-800'>{initialData.corporate.heading}</h3>
                    <p className='text-center p-[8vh]'>{initialData.corporate.content}</p>
                    <button className='bg-orange-800 text-white p-3 rounded-full flex w-[35vw] items-center justify-center mx-auto
                    '>
                        LEARN MORE <FaChevronRight className='mt-0'/>
                    </button>
                </div>
            </div>
            <div className='flex flex-col w-full h-fit mt-4'>
                <img src='https://24carrots.com/wp-content/uploads/2023/10/2.4-Venues-Jenny-Quicksall.jpg' className='w-[50vw] h-[50vh] rounded-full mx-auto object-cover'/>
                <div className='flex flex-col w-full'>
                    <h1 className='text-5xl text-[#1A4122] text-center m-5'>Venues</h1>
                    <h3 className='text-3xl text-center text-gray-800'>{initialData.venues.heading}</h3>
                    <p className='text-center p-[8vh]'>{initialData.venues.content}</p>
                    <button className='bg-orange-800 text-white p-3 rounded-full flex w-[35vw] items-center justify-center mx-auto
                    '>
                        LEARN MORE <FaChevronRight className='mt-0'/>
                    </button>
                </div>
            </div>
        </div>
        <div className='hidden lg:flex lg:flex-row lg:w-screen lg:h-fit lg:mt-[30vh]'>
            <Slider2 />
            <div className='flex flex-col w-[50vw]'>
                <h1 className='text-[#1A4122] text-8xl'>Making Every Experience Magical</h1>
                <div className='flex flex-row justify-start m-5'>
                    <div className='flex flex-col items-start gap-5'>
                        {Object.keys(initialData).map((key) => (
                        <h1
                            key={key}
                            onClick={() => handleEventClick(key)}
                            className={`${isSelected === key ? 'text-[#1A4122]' : 'text-gray-400'} ${isSelected !== key ? 'hover:text-orange-400' : ''} cursor-pointer`}
                        >
                            {key.charAt(0).toUpperCase() + key.slice(1)}
                        </h1>
                        ))}
                    </div>
                    <div className="event-content mx-[55px] w-[430px]">
                        <h2 className={`event-heading ${isActive ? 'text-[#1A4122]' : 'bg-rgay-400'} text-2xl`}>{initialData[isActive].heading}</h2>
                        <p className={`event-description ${isActive ? 'text-gray-400' : 'text-gray-300'}`}>{initialData[isActive].content}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Info