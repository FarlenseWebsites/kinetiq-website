"use client";
import Image from "next/image";
import ButtonWithTwoDots from "../ui/buttonWithTwodots";

export default function TreatmentsHero() {
  return (
    <section className="relative overflow-hidden flex flex-col items-center justify-start pt-[8vw]">
      <ButtonWithTwoDots label="Our Treatments" />

      <div className="bg-[#68628e] mt-[5vw] relative overflow-hidden w-full aspect-[21/9]">
        {/* Left dark rectangle */}
        <div className="absolute left-0 top-0 bottom-0 w-[25%] bg-[#373355]" />

        {/* Right dark pill */}
        <div className="absolute right-0 top-[-10%] bottom-[-10%] w-[67%] bg-[#373355] rounded-l-[100vw]" />

        {/* Decorative white circle */}
        <div className="absolute left-[-7%] bottom-[10%] w-[10%] aspect-square rounded-full bg-white z-10" />

        <div className="absolute inset-0 z-30 flex items-center">
          {/* Image side */}
          <div className="relative w-1/2 flex justify-start items-center h-full">
            <div className="relative left-[3vw] h-full aspect-square rounded-full overflow-hidden flex shadow-lg">
              {/* Left half — decorative gradient circle */}
              <div className="relative w-1/2 h-full bg-white flex items-center justify-center">
                <div
                  className="relative left-[11%] top-[-24%] w-[77%] aspect-square rounded-full z-20 flex items-center justify-center"
                  style={{
                    background: "linear-gradient(146deg, #ff914d 0%, #e06010 100%)",
                  }}
                >
                  <div className="w-[40%] aspect-square rounded-full bg-[#ECECEC]" />
                </div>
              </div>

              {/* Right half — photo */}
              <div className="relative w-1/2 h-full">
                <Image
                  src="/treatmenttable.jpg"
                  alt="Treatments"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
            </div>
          </div>

          {/* Text side */}
          <div className="relative w-1/2 flex flex-col items-end justify-center text-right pr-[5vw] gap-[1vw]">
            <h1 className="text-white leading-[0.9] font-medium text-[4.5vw]">
              Treatments
            </h1>
            <h2 className="text-[#FF914D] font-light leading-[0.9] text-[4.5vw]">
              & Therapies
            </h2>
            <p className="mt-[1vw] text-white/90 italic text-[1.2vw] leading-relaxed max-w-[80%]">
              Evidence-based treatments tailored
              <br />
              to restore, recover, and perform.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
