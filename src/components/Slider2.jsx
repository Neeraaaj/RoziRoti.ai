import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider2 = () => {
  return (
    <Swiper
    className='max-w-[50vw] cursor-grab max-h-full
    rounded-t-full lg:max-w-[30vw] mt-[0px] lg:mt-[-15vh]'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/08/wedding-scroll-cropped.jpg' className='object-cover h-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/2.2-Social-Lorely-Meza.jpg' className='h-full object-cover'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/2.3-Corporate-Joel-Maus.jpg' className='object-cover h-full'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/2.4-Venues-Jenny-Quicksall.jpg' className='object-cover h-full'/>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider2