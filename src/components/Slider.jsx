import React from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Slider = () => {
  return (
    <Swiper
    className='max-w-[100%] cursor-grab max-h-[70vh]
    rounded-tl-[250px] lg:max-w-[55vw]'
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
    >
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/1.1-Lorely-Meza-1.jpg' className='h-[480px] lg:h-fit' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/1.2-Holly-Sigafoos-Photo.jpg' className='object-fill'/>
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/1.3-Holly-Sigafoos-Photo.jpg' />
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2023/10/1.4-Lorely-Meza.jpg' />
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider