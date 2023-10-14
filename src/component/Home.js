import React from 'react'

export default function Home() {
  return (
    <div>
      <div className="home flex flex-col mx-auto items-center justify-center gap-3">
      <p className='text-blue-300 text-5xl '> Give your thoughts a wing to <span className='font-semibold text-blue-200 underline'>FLY</span></p>
        <p className='text-blue-300 text-2xl '> A platform for you, by you , from you </p>
        <img src="https://o.remove.bg/downloads/d6934262-0e91-4176-82fc-84f3f91d4be9/image-removebg-preview.png" alt="" className=' rounded-xl drop-shadow-xl' />
        <a href="#editor"><button className='bg-blue-300 text-blue-900 px-4 py-3 rounded-md hover:bg-blue-200 font-medium '>Get Started</button></a> 
      </div>
    </div>
  )
}
