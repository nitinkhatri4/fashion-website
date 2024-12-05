import React from 'react'

function Home() {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className='w-full h-screen   '>
       <video className='w-full h-screen object-cover' muted autoPlay loop src="/fashion-website/video.mp4" controls>
       </video>
       
    </div>
  )
}

export default Home