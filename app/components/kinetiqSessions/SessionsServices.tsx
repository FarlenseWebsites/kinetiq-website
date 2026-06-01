"use client"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import TreatmentCard from "../ui/kinetiqsessionCard"

const sessions = [
  {
    title: "In-Centre Treatment",
    description:
      "Experience hands-on physiotherapy at our KinetiQ centers with access to advanced therapies and specialized equipment. Each session is guided by expert clinicians to ensure precise treatment, faster recovery, and measurable results in a structured environment.",
    images: [
      "/incenter.png",
     
    ],
  },

  {
    title: "Home Visits",
    description:
      "Receive personalised physiotherapy care in the comfort of your home. Ideal for post-surgical recovery, elderly care, or convenience-led treatment, our therapists deliver the same clinical expertise with focused, one-on-one attention.",
    images: [
      "/home.png",
     
    ],
  },

  {
    title: "Online Physiotherapy",
    description:
        "Access expert consultations and guided rehabilitation from anywhere. Our online sessions ensure continuity of care with structured programs, real-time guidance, and progress tracking tailored to your needs.",
    images: [
      "/online.png",
      
    ],
  },

  {
    title: "Corporate",
    description:
      "Comprehensive workplace wellness solutions designed to reduce pain, improve posture, and enhance employee productivity. From on-site sessions to ergonomic assessments, we help build healthier, more resilient teams.",
    images: [
      "/corporate.png",
      
    ],
  },
]



export default function SessionsServices() {
  return (
    <section className="relative overflow-hidden bg-[#F4f4f4] py-14 sm:py-16 lg:py-14">
      
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* HEADING */}
        <div className="mb-14 flex flex-col items-center text-center sm:mb-20">
          
          <ButtonWithTwoDots label="We Offer" />
           <h1 className="text-center text-2xl sm:text-3xl font-medium bg-linear-to-r from-[#ff914d] to-[#e06010] bg-clip-text text-transparent mt-7">
            Multiple Access Points
          </h1>


          
        </div>

        {/* CARDS */}
        <div
         
          className="grid grid-cols-1 md:grid-cols-2  gap-8 px-4"
        >
          {sessions.map((session, index) => (
            <div
              key={index}
              className="flex justify-center"
            >
              <TreatmentCard
                title={session.title}
                description={session.description}
                images={session.images}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}