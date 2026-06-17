import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const centres = [
  {
    label: "Golf Course Road",
    address:
      "2nd Floor, F 11 16/17, Golf Course Road, DLF Phase 1, Sector 27, Gurugram, Haryana 122002",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.4316833970497!2d77.0939389!3d28.4665435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d1960c4b62a15%3A0xb16ca90c9680d6d5!2sKinetiQ%20Physiotherapy!5e0!3m2!1sen!2sin!4v1780297154631!5m2!1sen!2sin",
  },
  {
    label: "Golf Course Extension Road",
    address: "AIPL Joy Central Mall, Sector 65, Gurugram, Haryana 122101",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3509.466927370292!2d77.06049759999999!3d28.4051645!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d23070debe56b%3A0xd1704c37bdff7e47!2sKinetiq%20Physiotherapy!5e0!3m2!1sen!2sin!4v1780297026647!5m2!1sen!2sin",
  },
]

export default function ContactCentres() {
  return (
    <section id="contact-centres" className="bg-[#f4f4f4] py-10 md:py-20 px-4 sm:px-6 md:px-8 scroll-mt-32">
      {/* Added flex-col and items-center to properly center the top button */}
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Badge */}
        <ButtonWithTwoDots label="Visit KinetiQ" />

        {/* Map grid - 1 column on mobile, 2 columns on desktop */}
        <div className="mt-12 md:mt-20 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 w-full">
          {centres.map((centre) => (
            // Added items-center so the map and the text align perfectly in the middle
            <div key={centre.label} className="flex flex-col items-center gap-5 w-full">
              
              {/* Map embed */}
              {/* Removed fixed h-[260px] and added aspect-[4/3] for fluid proportional scaling. Added rounded-xl for Polish. */}
              <div className="w-full overflow-hidden shadow-md rounded-xl aspect-[4/3] bg-[#f4f4f4] border-dashed border-2 border-[#a4a1bb]">
                <iframe
                  src={centre.mapSrc}
                  width="100%"
                  height="100%"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={centre.label}
                />
              </div>

              {/* Label + address */}
              {/* Changed w-[70%] to max-w-[80%] so it shrinks naturally on tiny mobile screens but doesn't get too wide on desktop */}
              <div className="text-center w-full max-w-[75%] mt-5">
                <h3 className="font-medium text-[#68628E] text-lg md:text-2xl">
                  {centre.label}
                </h3>
                <p className="text-[#373355] text-sm md:text-base mt-1.5 leading-relaxed">
                  {centre.address}
                </p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  )
}