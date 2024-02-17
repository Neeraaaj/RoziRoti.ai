import React, { useState } from 'react'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { FaChevronRight } from 'react-icons/fa';


const Slider3 = () => {
    const [richLand, setRichLand] = useState(false);
    const [oakCreek, setOakCreek] = useState(false);
    const [ranchoLas, setRanchoLas]= useState(false);
    const [franchiscan, setFranchiscan] = useState(false);
    const [colonyHouse, setColonyHouse] = useState(false);
    const [oleHanson, setOleHanson] = useState(false);
  return (
    <Swiper
      className='w-full cursor-pointer h-[70vh] mt-10 flex mx-[2vw]'
      modules={[Navigation, Scrollbar, A11y]}
      spaceBetween={20}
      slidesPerView={2}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      style={{ overflow: 'visible' }} // Allow overflow
    >
      <SwiperSlide className='w-[90vw]' 
      onMouseEnter={() => setRichLand(!richLand)} 
            onMouseLeave={() => setRichLand(!richLand)}>
        <img src='https://24carrots.com/wp-content/uploads/2023/03/the-richland-tanveer-badal-13.jpg' 
        className='h-[65vh] z-0' 
        />
        {richLand  && (

        <div className={`absolute top-0 left-0 w-full h-[65vh] 
         bg-[rgba(199,123,100)] opacity-90 z-10`}>
          {/* Add your venue details here */}
          <div className='text-white p-4'>
            <button className='mx-auto bg-transparent border-2 border-white p-2 rounded-full flex mt-[30vh]'>
                EXPLORE VENUE <FaChevronRight className='mt-1'/>
            </button>
            <div className='mt-[15vh]'>
                <p>THE RICHLAND</p>
                <div className='w-[20vw] h-[5px] bg-white rounded-full'></div>
                <p className='text-2xl text-white'>ORANGE</p>
            </div>
          </div>
        </div>
        )}
      </SwiperSlide>
      <SwiperSlide onMouseEnter={() => setOakCreek(!oakCreek)} 
            onMouseLeave={() => setOakCreek(!oakCreek)}>
        <img src='https://24carrots.com/wp-content/uploads/2023/09/MAIN.jpg' className='object-fill h-[65vh]'/>
        {oakCreek  && (

            <div className={`absolute top-0 left-0 w-full h-[65vh] 
            bg-[rgba(199,123,100)] opacity-90 z-10`}>
            {/* Add your venue details here */}
            <div className='text-white p-4'>
                <button className='mx-auto bg-transparent border-2 border-white p-2 rounded-full flex mt-[30vh]'>
                    EXPLORE VENUE <FaChevronRight className='mt-1'/>
                </button>
                <div className='mt-[15vh]'>
                    <p>Oak Creek Golf Club</p>
                    <div className='w-[20vw] h-[5px] bg-white rounded-full'></div>
                    <p className='text-2xl text-white'>IRVINE</p>
                </div>
            </div>
            </div>
)}
      </SwiperSlide>
      <SwiperSlide
      onMouseEnter={() => setRanchoLas(!ranchoLas)}
      onMouseLeave={() => setRanchoLas(!ranchoLas)}>
        <img src='https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-4.jpg' className='h-[65vh]'/>
        {ranchoLas  && (

            <div className={`absolute top-0 left-0 w-full h-[65vh] 
            bg-[rgba(199,123,100)] opacity-90 z-10`}>
            {/* Add your venue details here */}
            <div className='text-white p-4'>
                <button className='mx-auto bg-transparent border-2 border-white p-2 rounded-full flex mt-[30vh]'>
                    EXPLORE VENUE <FaChevronRight className='mt-1'/>
                </button>
                <div className='mt-[15vh]'>
                    <p>Rancho Las Lamos</p>
                    <div className='w-[20vw] h-[5px] bg-white rounded-full'></div>
                    <p className='text-2xl text-white'>SILVERADO</p>
                </div>
            </div>
            </div>
            )}
      </SwiperSlide>
      <SwiperSlide
      onMouseEnter={() => setFranchiscan(!franchiscan)}
      onMouseLeave={() => setFranchiscan(!franchiscan)}>
        <img src='https://24carrots.com/wp-content/uploads/2023/08/7-31-5.png' className='h-[65vh] w-full'/>
        {franchiscan  && (
            <div className={`absolute top-0 left-0 w-full h-[65vh] 
            bg-[rgba(199,123,100)] opacity-90 z-10`}>
            {/* Add your venue details here */}
            <div className='text-white p-4'>
                <button className='mx-auto bg-transparent border-2 border-white p-2 rounded-full flex mt-[30vh]'>
                    EXPLORE VENUE <FaChevronRight className='mt-1'/>
                </button>
                <div className='mt-[15vh]'>
                    <p>The Franchiscan Gardens</p>
                    <div className='w-[20vw] h-[5px] bg-white rounded-full'></div>
                    <p className='text-2xl text-white'>SAN JUAN CAPISTRANO</p>
                </div>
            </div>
            </div>
            )}
      </SwiperSlide>
      <SwiperSlide 
      onMouseEnter={() => setColonyHouse(!colonyHouse)}
      onMouseLeave={() => setColonyHouse(!colonyHouse)}>
        <img src='https://24carrots.com/wp-content/uploads/2023/08/9-7.jpg' className='h-[65vh] w-full'/>
        {colonyHouse  && (
            <div className={`absolute top-0 left-0 w-full h-[65vh] 
            bg-[rgba(199,123,100)] opacity-90 z-10`}>
            {/* Add your venue details here */}
            <div className='text-white p-4'>
                <button className='mx-auto bg-transparent border-2 border-white p-2 rounded-full flex mt-[30vh]'>
                    EXPLORE VENUE <FaChevronRight className='mt-1'/>
                </button>
                <div className='mt-[15vh]'>
                    <p>The Colony House</p>
                    <div className='w-[20vw] h-[5px] bg-white rounded-full'></div>
                    <p className='text-2xl text-white'>ANAHEIM</p>
                </div>
            </div>
            </div>
            )}
      </SwiperSlide>
      <SwiperSlide
      onMouseEnter={() => setOleHanson(!oleHanson)}
      onMouseLeave={() => setOleHanson(!oleHanson)}>
        <img src='https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN-3.jpg' className='h-[65vh]'/>
        {oleHanson  && (
            <div className={`absolute top-0 left-0 w-full h-[65vh] 
            bg-[rgba(199,123,100)] opacity-90 z-10`}>
            {/* Add your venue details here */}
            <div className='text-white p-4'>
                <button className='mx-auto bg-transparent border-2 border-white p-2 rounded-full flex mt-[30vh]'>
                    EXPLORE VENUE <FaChevronRight className='mt-1'/>
                </button>
                <div className='mt-[15vh]'>
                    <p>Ole Hanson Beach Club</p>
                    <div className='w-[20vw] h-[5px] bg-white rounded-full'></div>
                    <p className='text-2xl text-white'>SAN CLAMENTE</p>
                </div>
            </div>
            </div>
            )}
      </SwiperSlide>
      <SwiperSlide>
        <img src='https://24carrots.com/wp-content/uploads/2022/08/1.-MAIN.jpg' className='h-[65vh]'/>
      </SwiperSlide>
      ...
    </Swiper>
  )
}

export default Slider3