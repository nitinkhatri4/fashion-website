import React from "react";

function Components() {
  return (
    <div className="w-full p-20 bg-white text-black">
      <h1 className='font-["Neue_Montreal"] text-6xl tracking-tight'>
        "Unlock your creativity with our fashion design platform. From sketch to
        runway, explore tools, tutorials, and inspiration to bring your designs
        to life."
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-10 mt-20 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-7xl ">StylePure CEO</h1>
          <a
            href="https://www.linkedin.com/in/nitin-khatri-464a9023a/"
            className="flex w-[17vw] uppercase gap-10 items-center px-10 py-6 bg-zinc-800 mt-10 rounded-full text-white"
          >
            Read More
            <div className="w-5 h-5 bg-zinc-100 rounded-full"></div>
          </a>
        </div>
        <div className="w-1/2 h-[70vh] ">
          <img
            src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}

export default Components;
