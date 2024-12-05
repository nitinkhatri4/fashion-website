import React from 'react'

function Cards() {
  return (
   
    <div className='w-full h-screen bg-black  flex items-center px-32 gap-5'>
        <div className="cardcontainer h-[50vh] w-1/2">
            <div className="card relative text-white rounded-xl w-full  overflow-hidden h-full bg-[#004D43]">
            <img src="https://images.unsplash.com/photo-1492447216082-4726bf04d1d1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <button className='absolute left-10 px-5 py-3 border-2 rounded-full bottom-10'>&copy;Martin</button>
            </div>
        </div>
        <div className="cardcontainer flex gap-5 h-[50vh] w-1/2">
            <div className="card relative text-white rounded-xl w-full h-full overflow-hidden bg-[#004D43]">
                <img src="https://images.unsplash.com/photo-1535295972055-1c762f4483e5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <button className='absolute left-10 px-5 py-3 border-2 rounded-full bottom-10'>&copy;Eliza</button>
            </div>
            <div className="card relative rounded-xl w-full text-white h-full overflow-hidden bg-[#004D43]">
            <img src="https://plus.unsplash.com/premium_photo-1689551670902-19b441a6afde?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                <button className='absolute left-10 px-5 py-3 border-2 rounded-full bottom-10'>&copy;Shizuka</button>
            </div>
        </div>

    </div>
  
  )
}

export default Cards