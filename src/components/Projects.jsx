import React, { useState } from 'react'

function Projects() {
   

  return (
    <div className='w-full bg-black text-white py-10 border-b-[1px] -mb-16 border-zinc-700'>
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
            <h1 className='text-7xl font-["Neue_Montereal"] tracking-tight'>Models</h1>
        </div>
        <div className="px-12">
        <div className="cards w-full flex gap-10 mt-10">
            <div className="cardcontainer relative w-1/2  h-[75vh]">
          
            <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className="w-full h-full bg-cover" src='https://images.pexels.com/photos/6939169/pexels-photo-6939169.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2' alt="" />
            </div>
            <h1 className='text-white font-semibold text-3xl pl-4 mt-4'>Rose Williomson</h1>
            </div>
            <div className="cardcontainer relative w-1/2  h-[75vh]  ">
            
            <div className="card w-full h-full rounded-xl overflow-hidden">
                <img className='w-full h-full bg-cover' src="https://images.pexels.com/photos/1036620/pexels-photo-1036620.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
            </div>
            <h1 className='text-white font-semibold text-3xl pl-4 mt-4'>Kate Little</h1>
            </div>  
            </div>
        </div>
    
    </div>
  )
}

export default Projects