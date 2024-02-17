import React from 'react'

const Email = () => {
  return (
    <div className='lg:flex lg:flex-row flex flex-col  w-full h-fit mt-[170vh] lg:mt-[80vh]'>
        <div className='flex flex-col w-full lg:w-[50vw] bg-orange-600 p-10 gap-4'>
            <h1 className='text-white text-6xl'>Endless Inspiration</h1>
            <p className='text-white text-2xl mt-10'>
            Sign up to our newsletter for fresh updates, encouragement, and exclusive insights.
            </p>
            <div className='flex flex-row gap-5'>
                <input title='Enter Your Email' className='text-orange-400 
                w-[35vw] lg:w-[20vw] rounded-full' />
                <button className='bg-orange-800 text-white p-2 rounded-full'
                >SIGN UP</button>
            </div>
            <p className='text-white text-[15px]'>By clicking Sign Up you’re confirming that you agree with our Terms and Conditions.</p>
        </div>
        <div className='w-full lg:w-[50vw]'>
            <img src='https://24carrots.com/wp-content/uploads/2023/08/signup.png'
            />
        </div>
    </div>
  )
}

export default Email