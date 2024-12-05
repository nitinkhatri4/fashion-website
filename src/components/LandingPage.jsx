import React from 'react'
import { FaArrowUp } from "react-icons/fa";

function LandingPage() {
  return (
    <div className='w-full h-screen pt-1'>
        <div className="textstructure mt-28 px-20">
            {["Every ","Skin-colour","is beautiful"].map((item,index)=>{
                return  <div className="masker">
                <h1 className='uppercase -leading-[6vw] tracking-tighter font-medium text-8xl font-[]'>
                    {item}
                    </h1>
            </div>
            })}
        </div>
        <div className="border-t-[1px] border-zinc-950 flex justify-between items-center mt-12 px-20 py-5">
            {[
                "For public and privatte comapnies",
                "From the first pitch to ipo"
            ].map((item,index)=>(
            <p className='text-md font-light tracking-tighter leading-none'>{item}</p>
        ))}
        <div className="start">
            <div className="px-5 py-2 border-[1px] font-light text-sm capitalize rounded-full border-zinc-950">Start the project</div>
            
        </div>
        </div>
    </div>
  )
}

export default LandingPage