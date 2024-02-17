import React from 'react'

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

const Slider4 = () => {
  return (
    <Swiper
      className='cursor-grab max-h-[70vh] bg-transparent
      w-[55vw] mt-10
       lg:w-[100vw] lg:h-[95vh] lg:mx-[10vw] justify-center items-center'
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      scrollbar={{ draggable: true }}
      autoplay={{ delay: 2000, disableOnInteraction: false }} // Autoplay every 2 seconds
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
        <SwiperSlide className='flex flex-row w-full gap-10'>
            <img src='https://24carrots.com/wp-content/uploads/2023/10/4.2-Lorely-Meza.jpg'/>
            <div className='flex flex-col w-[40vw] mt-[20vh] items-start'>
                <h1 className='text-white text-3xl text-center '>"The staff was top-notch - professional, hardworking, and just a pleasure to work with."</h1>
                <h1 className='text-white text-3xl m-5'>ROBIN</h1>
                <p className='text-gray-400 text-2xl m-5'>Assistant Manager, Corelogic</p>
            </div>
        </SwiperSlide>
        <SwiperSlide className='flex flex-row w-full gap-10'>
            <img src='https://24carrots.com/wp-content/uploads/2023/10/4.1-Kay-McCoy.jpg'/>
            <div className='flex flex-col w-[40vw] mt-[20vh] items-start'>
                <h1 className='text-white text-3xl text-center '>"I could not stop getting compliments on how delicious the food was! My [guests] still texted me the day after to tell me that the food was amazing."</h1>
                <h1 className='text-white text-3xl m-5'>AMANDA & JETHRO</h1>
                <p className='text-gray-400 text-2xl m-5'>The Colony House</p>
            </div>
        </SwiperSlide>
    </Swiper>
  )
}

export default Slider4