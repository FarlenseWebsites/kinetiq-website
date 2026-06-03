"use client"

import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const womenServices = [
  {
    title: "Women's Health Physiotherapy",
    description: "Focused care for pregnancy, postnatal recovery, and hormonal changes across life stages. Addresses pelvic floor dysfunction, pregnancy-related back pain, and post-menopause fatigue. Aims to restore strength, stability, and overall well-being through targeted rehabilitation.",
    image: "/incenter.png",
  },
  {
    title: "Prenatal Physiotherapy",
    description: "Supports physical health and comfort throughout pregnancy. Addresses common concerns including lower back pain, pelvic instability, and postural changes. Prepares the body for labour through safe, trimester-appropriate exercise and therapy.",
    image: "/prenatal1.png",
  },
  {
    title: "Postnatal Physiotherapy",
    description: "Aids recovery after childbirth with a focus on core strength and pelvic stability. Addresses diastasis recti, pelvic floor weakness, and posture-related discomfort. Supports a gradual, safe return to functional daily activity and exercise.",
    image: "/postnatal.png",
  },
  {
    title: "Pelvic Floor Rehabilitation",
    description: "Rehabilitation for nerve and neurological conditions affecting movement. Focused on restoring coordination, balance, and independence with structured therapy that extends beyond the clinic into your home.",
    image: "/pelvic1.png",
  },
]

const IMAGE_HEIGHT_PCT = `${((280 / 702) * 100).toFixed(3)}%`

const leftCards  = womenServices.filter((_, i) => i % 2 === 0)
const rightCards = womenServices.filter((_, i) => i % 2 === 1)
export default function PhysioWomenSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent">
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
        <div className="flex flex-col gap-14 md:hidden">
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
          <div className="flex-1 flex flex-col gap-14 lg:gap-16 pt-8">
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
              </div>
            ))}
          </div>

          {/* Right column — first card offset to sit below the left card's image */}
          <div className="flex-1 flex flex-col gap-14 lg:gap-16">
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
