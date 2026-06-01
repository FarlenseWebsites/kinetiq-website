"use client"

import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const womenServices = [
  {
    title: "Women's Health Physiotherapy",
    description: "Pelvic floor, hormonal, and postural care tailored specifically for women's health needs.",
    image: "/excerciseimg.png",
  },
  {
    title: "Prostate Physiotherapy",
    description: "Targeted pelvic floor rehabilitation and recovery support for prostate-related conditions.",
    image: "/excerciseimg.png",
  },
  {
    title: "Antenatal Physiotherapy",
    description: "Safe exercise, posture support, and pain management throughout pregnancy.",
    image: "/excerciseimg.png",
  },
  {
    title: "Pelvic Floor Rehabilitation",
    description: "Specialised strengthening and retraining to restore pelvic floor control and function.",
    image: "/excerciseimg.png",
  },
]

const IMAGE_HEIGHT_PCT = `${((280 / 702) * 100).toFixed(3)}%`

const leftCards  = womenServices.filter((_, i) => i % 2 === 0)
const rightCards = womenServices.filter((_, i) => i % 2 === 1)
export default function PhysioWomenSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent border-t-2 border-[#D2D0DD]">
      <div className="max-w-6xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Treatment" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-linear-to-r from-[#68628E] to-[#373355] bg-clip-text text-transparent mt-7">
            Women's Health & Recovery
          </h1>
          <p className="text-center text-[#373355] text-sm sm:text-base italic leading-relaxed max-w-lg mx-auto mt-5">
            Hands-on techniques to relieve pain,
            <br />
            restore mobility, and improve joint function.
          </p>
        </div>

        {/* Mobile: single column, alternating mirrored */}
        <div className="flex flex-col gap-8 md:hidden">
          {womenServices.map((service, idx) => (
            <PhysioServiceCard
              key={idx}
              title={service.title}
              description={service.description}
              imageSrc={service.image}
              mirrored={idx % 2 === 1}
            />
          ))}
        </div>

        {/* Desktop: staggered 2-column */}
        <div className="hidden md:flex gap-12 lg:gap-16">

          {/* Left column */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-10 pt-8">
            {leftCards.map((service, i) => (
              <div
                key={i}
                className="relative"
                style={i === 0 ? { containerType: "inline-size" } : undefined}
              >
                <PhysioServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                />
                {i === 0 && (
                  <div
                    className="absolute rounded-full pointer-events-none z-10"
                    style={{
                      width: "clamp(36px, 13cqw, 78px)",
                      height: "clamp(36px, 13cqw, 78px)",
                      backgroundColor: "#DDD0BE",
                      right: "clamp(-39px, -6.5cqw, -18px)",
                      top: "55%",
                      transform: "translateY(-50%)",
                    }}
                  />
                )}
              </div>
            ))}
          </div>

          {/* Right column — first card offset to sit below the left card's image */}
          <div className="flex-1 flex flex-col gap-8 lg:gap-10">
            {rightCards.map((service, i) => (
              <div
                key={i}
                style={i === 0 ? { marginTop: `calc(${IMAGE_HEIGHT_PCT} + 3.5rem)` } : undefined}
              >
                <PhysioServiceCard
                  title={service.title}
                  description={service.description}
                  imageSrc={service.image}
                  mirrored
                />
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  )
}
