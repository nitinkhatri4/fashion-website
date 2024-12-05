import React from 'react'

function Navbar() {
  return (
    <div className=' w-full px-20 py-4 font-["Neue Montreal"] flex justify-between items-center '>
        <div className="logo">
           <a className='text-2xl' href="/">StylePure</a>
        </div>
        <div className="links flex gap-10">
            {["Sevices", "Our Work", "About Us", "Contact",].map((item,index)=>(
                <a href='/' key={index} className={`text-lg capitalize font-light ${index === 4 && "ml-32"}`} >{item}</a>
            ))}
        </div>
    </div>
  )
}

export default Navbar