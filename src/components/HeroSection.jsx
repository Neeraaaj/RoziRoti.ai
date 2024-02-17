import React from 'react'
import { FaChevronDown } from "react-icons/fa";


const HeroSection = () => {
  return (
    <section class="relative h-screen flex flex-col items-center justify-center text-center text-white py-0 px-3">
        <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
            <video class="min-w-full min-h-full absolute object-cover" type="video/mp4" autoPlay loop muted>
                <source src="https://24carrots.com/wp-content/video/24carrtos-home-banner.mp4"></source>
            </video>
        </div>
        <div class="video-content space-y-2 z-10">
            <h1 class="font-mono text-8xl mt-[-120px]">Simply the Finest</h1>
        </div>
        <div className="absolute bottom-10">
            <FaChevronDown className="w-8 h-8" />
        </div>
    </section>
  )
}

export default HeroSection