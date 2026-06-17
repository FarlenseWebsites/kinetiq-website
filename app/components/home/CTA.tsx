import BookConsultationButton from "../ui/bookConsulationButton"
import Image from "next/image"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"


export default function CTA() {
  return (
    <section className="flex flex-col bg-[#F4F4F4] items-center w-full py-15">

      {/* book button */}
      <div className="pb-15">
        <ButtonWithTwoDots label="Book Now" />
      </div>

      {/* Image with overlay and text */}
      <div className="relative w-full aspect-4/3 sm:aspect-video md:aspect-21/9 overflow-hidden">
        <Image
          src="/treatmenttable.jpg"
          alt="Treatment room background"
          fill
          priority
          sizes="100vw"
          className="object-cover"
          style={{
            objectPosition: "22% 42%",
            transform: "scale(1.25) translateX(-6%)",
          }}
          aria-hidden
        />
        {/* Dark overlay for readable text */}
        <div className="absolute inset-0 bg-black/30" />

        {/* content text */}

        <div className="relative z-10 text-center px-5 h-full flex flex-col items-center justify-center mb-8 sm:mb-12 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semi text-[#373355] mb-4 sm:mb-6 italic tracking-tight drop-shadow-lg">
            We&apos;re ready<br />when you are.
          </h2>
          <BookConsultationButton />
        </div>
      </div>
    </section>
  )
}
