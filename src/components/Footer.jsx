import React from 'react'

function Footer() {
  return (
    <div className='w-full bg-white text-black flex gap-5 h-screen font-["Founders_Grotesk_X-Condensed"]  p-20'>
        <div className="w-full flex h-full flex-col justify-between ">
            <div className="heading">
                <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-4'>Create by</h1>
                <h1 className='text-[5vw] font-semibold uppercase leading-none -mb-4'>Munnawar</h1>
            </div>
            <h3 className='text-4xl'>All rights reserved.</h3>
        </div>
        <div className="w-1/2">
        <h1 className='text-[4vw] font-semibold uppercase leading-none -mb-4'>Contact me</h1>
        <div className="dets font-[Neue_Montreal'] mt-10">
          <h1 className='text-2xl underline mb-4'>Social links:</h1>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://m.facebook.com/profile.php?id=100030209521059&name=xhp_nt__fb__action__open_user">Facebook</a>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://www.instagram.com/__munwwar__/?next=%2F">Instagram</a>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://www.linkedin.com/in/munnawar-hussain-aa544b227/">Linkedln</a>
            <a className='block mb-1 hover:underline text-xl font-light' href="https://github.com/Munnawar23">Github</a>
            <h1 className='text-2xl underline mt-8 mb-4'>Mail:</h1>
            <h1 className='block mb-1 hover:underline text-xl font-light' href="">munawwarh48@gmail.com</h1>
            <h1 className='text-2xl underline mt-8 mb-4'>Adress:</h1>
            <a className='block mb-1 hover:underline text-xl font-light' href="">Udaipur, India</a>
            
        </div>
        </div>
    </div>
  )
}

export default Footer