import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="home flex flex-col md:flex-row mx-auto items-center justify-center gap-2 gap-x-16">
      <img src="https://o.remove.bg/downloads/d6934262-0e91-4176-82fc-84f3f91d4be9/image-removebg-preview.png" alt="" className=' rounded-xl drop-shadow-xl order-2' />

      <div className='text-blue-300 text-5xl relative flex flex-col justify-start items-start '>
      <span className='absolute -left-10 -top-9 rotate-[30deg] drop-shadow-xl'><img src="https://o.remove.bg/downloads/50c45e9d-edb6-4398-900d-5af656c180bb/png-clipart-star-blue-star-blue-website-removebg-preview.png" alt="" className='h-12 hover:rotate-[360deg] transition ease-in-out duration-1000 hover:scale-[1.6]' /></span>
         Give your thoughts a wing to <span className='font-semibold text-blue-200 underline'>FLY</span>
         <a href="#editor"><button className=' bg-blue-300 text-blue-900 px-4 py-3 rounded-md hover:bg-blue-200 font-medium mt-4'>Get Started</button></a> 
      </div>
        {/* <p className='text-blue-300 text-2xl '> A platform for you, by you , from you </p> */}
      </div>
    </div>
  )
}
