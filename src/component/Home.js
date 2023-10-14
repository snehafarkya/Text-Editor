import React from 'react'
import hero from '../assets/hero.png'
import star from '../assets/star.png'
export default function Home() {
  return (
    <div className='home flex flex-col md:justify-center mx-6 md:h-screen'>
      <div className=" flex-col md:flex-row md:mx-auto mx-6 items-center justify-center gap-2 gap-x-16  mt-12 md:mt-0">
      <p class="bg-blue-100  text-blue-800  font-bold mr-2 px-2.5 py-4 text-xl  rounded-lg shadow-lg border-blue-400 border-2 cursor-pointer hover:shadow-2xl transition ease-in-out duration-300">Welcome to CanvasMaster <span >✍</span>, captivate your thoughts</p>
      </div>
      
      <div className="flex flex-col md:flex-row mx-auto items-center justify-center gap-2 gap-x-16 ">
      <img src={hero} alt="" className=' rounded-xl drop-shadow-2xl md:order-2' />

      <div className=' relative flex flex-col justify-start items-start md:gap-6 gap-4'>
      <span className='absolute -left-10 -top-9 rotate-[30deg] drop-shadow-xl hidden md:flex'><img src={star} alt="" className='h-12 hover:rotate-[360deg] transition ease-in-out duration-1000 hover:scale-[1.6]' /></span>
         <p className='text-blue-700 md:text-5xl text-4xl font-extrabold text-left'>Give your thoughts a <br className='hidden md:flex'/> wing to <span className='font-semibold text-blue-900 underline main'>FLY</span></p>
        <p className='md:text-xl text-lg text-blue-500 w-[80%] text-left font-semibold'>"Unleash Your Inner Wordsmith: Crafting Compelling Blogs Has Never Been Easier!"</p> 
         <a href="#editor"><button className=' bg-blue-700 text-blue-100 px-4 py-3 rounded-md hover:bg-blue-900 font-semibold md:mt-4 text-lg hover:shadow-2xl tracking-wide shadow-lg '>Get Started</button></a> 
      </div>
      </div>
        {/* <p className='text-blue-300 text-2xl '> A platform for you, by you , from you </p> */}
    </div>
  )
}
