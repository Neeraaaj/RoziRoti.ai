import React, {useState}from 'react'
import Logo from '../assets/logo.png'

const NavBar = () => {

    const [showMenu, setShowMenu] = useState(false);
    var toggleBtn = document.getElementById('toggle');
    var collapseMenu = document.getElementById('collapseMenu');
    const handleToggle = () => {
        setShowMenu(!showMenu)
        if (collapseMenu?.style.display === 'block') {
            collapseMenu.style.display = 'none';
          } else {
            collapseMenu.style.display = 'block';
          }
    }

    const handleMenuItemClick = () => {
        setShowMenu(!showMenu);
    }
    
  return (
    <header className={`py-4 px-4 sm:px-10  ${showMenu ? 'bg-white' : 'bg-green-900'} lg:bg-white md:bg-white font-[mono] min-h-[70px] relative`}>
        <div className='flex flex-wrap items-center justify-between gap-5 p-7'>
        <a href="#"
            className="justify-center mx-auto lg:absolute max-lg:top-4 max-lg:left-10 max-sm:left-4 lg:top-2/4 lg:left-2/4 lg:-translate-x-1/2 lg:-translate-y-1/2" ><img
            src={Logo} alt="logo" className='w-56 mix-blend-multiply' />
        </a>
        <div class='flex items-center ml-auto lg:order-1'>
        <p class='mr-6 font-semibold text-[15px] border-none outline-none mx-[0px] lg:mx-[30px]'><a href='javascript:void(0)'
            class='text-black hover:underline hidden lg:block md:block'>VENUES</a></p>
        <p
          class='px-4 py-2 text-sm rounded-sm font-bold text-black transition-all ease-in-out duration-300 hidden lg:block md:block mx-[0px] lg:mx-[50px]'>CAREERS
        </p>
        <p
          class='px-4 py-2 text-sm font-bold text-white transition-all ease-in-out duration-300  bg-orange-700 rounded-full hover:bg-orange-500 cursor-pointer hidden lg:block md:block mx-[0px] lg:mx-[30px]'>Get in touch
        </p>
            <button id="toggle" className=' lg:hidden ml-7' onClick={handleToggle}>
                <svg className="w-7 h-7" fill={`${showMenu ? '#fff' : 'black'}`} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd"
                    d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                    clipRule="evenodd"></path>
                </svg>
            </button>
        </div>
        <ul id="collapseMenu" 
        className={`block lg:!flex lg:space-x-5 max-lg:space-y-2 max-lg:hidden max-lg:py-4 max-lg:w-full ${showMenu ? 'block' : 'hidden'} bg-green-900 
        h-[88vh] lg:h-[fit-content] sm:bg-green-800 lg:bg-white md:bg-white] mt-[50px] lg:mt-[0px] md:mt-[0px] mx-[-70px]
        lg:mx-[70px] `}>
            <li className='text-gray-400 max-lg:py-2 px-3 max-lg:rounded' onClick={handleMenuItemClick}>
            <a href='javascript:void(0)'
                className={` text-gray-300  block font-semibold text-6xl lg:text-[15px] md:text-[15px] lg:text-gray-700 md:text-gray-700 mx-[25vw] lg:mx-[0px]`}>ABOUT</a>
            </li>
            <li className='max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
                className='lg:hover:text-[#007bff] text-gray-300 block font-semibold text-6xl lg:text-[15px] md:text-[15px] lg:text-gray-700 md:text-gray-700 mx-[25vw] lg:mx-[0px]'>SERVICES</a>
            </li>
            <li className=' max-lg:py-2 px-3 max-lg:rounded'><a href='javascript:void(0)'
                className='lg:hover:text-[#007bff] text-gray-300 block font-semibold text-6xl lg:text-[15px] md:text-[15px] lg:text-gray-600 md:text-gray-700 mx-[25vw] lg:mx-[0px]'>EVENTS</a>
            </li>
        </ul>
        </div>
    </header>
  )
}

export default NavBar