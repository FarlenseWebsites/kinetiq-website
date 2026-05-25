"use client"

import Image from "next/image"

const ServicesBanner = () => {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start pt-[8vw]">

      {/* Main Design Section - Locked to a proportional 21:9 scale */}
      <div className="bg-[#ffc7a4] relative overflow-hidden w-full aspect-[21/9]">

        {/* BACKGROUND SHAPES */}
        {/* left rectangle */}
        <div className="absolute left-0 top-0 bottom-0 w-[27%] bg-[#ff914d]" />

        {/* RIGHT DARK SHAPE */}
        <div className="absolute right-0 top-[-10%] bottom-[-10%] w-[67%] bg-[#ff914d] rounded-l-[100vw]" />

        {/* SMALL LEFT WHITE CIRCLE */}
        <div className="absolute left-[-5%] bottom-[10%] w-[10%] aspect-square rounded-full bg-white z-10" />

        {/* CONTENT GRID - perfectly fills the aspect ratio container */}
        <div className="absolute inset-0 z-30 flex items-center">

          {/* IMAGE SIDE - Exact 50% width */}
          <div className="relative w-1/2 flex justify-start items-center h-full">

            {/* FULL CIRCLE CONTAINER */}
            <div className="relative left-[5vw] h-full aspect-square rounded-full overflow-hidden flex shadow-lg">
              
              {/* LEFT HALF - White Background with Inner Orange Circle */}
              <div className="relative w-1/2 h-full bg-white flex items-center justify-center">
                {/* Inner Orange Circle - sized dynamically with % */}
                <div className="relative left-[11%] top-[-24%] w-[77%] aspect-square rounded-full bg-[#ff914d] z-20" />
              </div>

              {/* RIGHT HALF - Image */}
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

          {/* TEXT SIDE - Exact 50% width */}
          <div className="relative z-40 w-1/2 flex flex-col items-end justify-center text-right pr-[5vw]">
            {/* Pure vw for text so it shrinks exactly with the rest of the elements */}
            <h1 className="text-white leading-[0.9] font-medium text-[4.5vw]">
              Services
            </h1>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default ServicesBanner