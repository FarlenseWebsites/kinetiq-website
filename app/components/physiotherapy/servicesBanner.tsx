import React from 'react'
import Image from 'next/image'

const servicesBanner = () => {
   return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start pt-20 md:pt-30">

      

      {/* Main Design Section */}
      <div className="bg-[#ffc7a4]  relative overflow-hidden w-full">

        <div className="relative overflow-hidden">

          {/* left rectangle */}
          <div className="absolute left-0 top-0 bottom-0 w-[22%] bg-[#ff914d]" />

          {/* RIGHT DARK SHAPE */}
          <div className="absolute right-0 top-[-10%] bottom-[-10%] w-[67vw] bg-[#ff914d] rounded-l-[300%]" />

          {/* SMALL LEFT WHITE CIRCLE */}
          <div className="absolute left-[-6%] bottom-[8%] w-[10%] aspect-square rounded-full bg-white z-10" />

          {/* CONTENT */}
          <div className="relative z-30 grid grid-cols-[1fr_1fr] items-center">

            {/* IMAGE SIDE */}
            <div className="relative flex justify-start items-center h-[clamp(150px,45vw,480px)]">

              {/* HALF IMAGE + HALF WHITE CIRCLE */}
              <div className="relative left-[5vw] h-full aspect-square rounded-full overflow-hidden flex">
                {/* LEFT HALF WHITE */}
                <div className="w-1/2 h-full bg-white">
                  {/* Inner donut */}
                  <div
                    className="absolute left-[12%] top-[6%] w-[38%] aspect-square rounded-full z-20 flex items-center justify-center bg-[#ff914d]"
                    
                  >
                    
                  </div>
                </div>
                {/* RIGHT HALF IMAGE */}
                <div className="relative w-1/2 h-full">
                  <Image
                    src="/servicesrightside.png"
                    alt="Services"
                    fill
                    className="object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* TEXT SIDE */}
            <div className="relative z-40 flex flex-col items-end justify-center text-right w-full pr-[5vw]">

              <h1 className="text-white leading-[0.9] font-medium text-[clamp(0.85rem,5.8vw,4.75rem)]">
                Services
              </h1>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default servicesBanner