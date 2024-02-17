import React from 'react'

const Business = () => {
  return (
    <div className='bg-[#E8EBE4] mt-[-20vh] flex flex-col p-[150px]'>
        <div className='flex flex-col'>
            <h1 className='text-4xl lg:text-8xl text-center mt-[25vh] w-[85vw] lg:w-[45vw] mx-[-25vw] lg:mx-auto text-[#1A4122]'>Far More Than Just Business</h1>
            <p className='text-gray-500 m-10 w-[65vw] lg:w-[40vw] justify-center items-center mx-[-15vw]  lg:mx-auto text-1xl text-center font-light'>The way you do anything is the way you do everything. We haven’t cracked the code on catering; we simply care unreasonably about every aspect of what we do. We care about people as much as we care about details, and we absolutely refuse to compromise on making your day anything but the best. We’ve got your back from the initial idea to the final farewell!</p>
        </div>
        <iframe className='mx-[-22vw] lg:mx-auto w-[80vw] h-[50vh] lg:h-[600px]' width="1200" height="600" src="https://www.youtube.com/embed/7gPP9hsV4a0?si=pephKaIz8kufGJux" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  )
}

export default Business