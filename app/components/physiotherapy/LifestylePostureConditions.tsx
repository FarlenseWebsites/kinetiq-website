"use client"

import { motion } from "framer-motion"
import PhysioServiceCard from "../ui/PhysioServiceCard"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"
import { conditionImageMap } from "../../lib/physioImages"

// ─────────────────────────────────────────────────────────────────────────────
// Add or remove conditions here.
// Images are managed in lib/physioImages.ts — no need to touch this file.
// ─────────────────────────────────────────────────────────────────────────────
const conditions = [
  { title: "Neck & Cervical",       description: "Cervical spondylosis, neck stiffness, and radiculopathy treatment" },
  { title: "Shoulder & Upper Limb", description: "Rotator cuff injuries, impingement syndrome, and shoulder instability" },
  { title: "Elbow Wrist & Hand",    description: "Tennis elbow, carpal tunnel, and wrist tendinitis rehabilitation" },
  { title: "Lower Back & Lumbar",   description: "Disc herniation, lumbar strain, and chronic lower back pain" },
  { title: "Hip & Pelvis",          description: "Hip impingement, bursitis, and pelvic girdle pain management" },
  { title: "Knee",                  description: "ACL/PCL rehab, knee osteoarthritis, and patellofemoral syndrome" },
  { title: "Ankle & Foot",          description: "Plantar fasciitis, ankle sprains, and Achilles tendinopathy" },
  { title: "Frozen Shoulder",       description: "Adhesive capsulitis — restoring full range of motion progressively" },
  { title: "Scoliosis",             description: "Spinal curvature correction and posture retraining programs" },
  { title: "Lumbar Spondylitis",    description: "Spinal inflammatory conditions and stiffness management" },
  { title: "Neuropathy",            description: "Peripheral nerve pain, numbness, and functional recovery" },
  { title: "Osteoporosis",          description: "Bone density improvement and fracture-prevention exercises" },
]

const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
  },
}

export default function ConditionsSection() {
  return (
    <section className="py-10 sm:py-14 md:py-20 px-4 sm:px-6 md:px-8 bg-transparent border-t-2 border-[#D2D0DD]">
      <div className="max-w-5xl mx-auto">

        <div className="justify-center mb-8 sm:mb-10">
          <ButtonWithTwoDots label="Services" />
          <h1 className="text-center text-2xl sm:text-3xl font-medium bg-gradient-to-r from-[#68628E] to-[#373355] bg-clip-text text-transparent mt-7">
            LifeStyle & Postural 
            <br/>
            Conditions
          </h1>           
        </div>

       

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          className="grid gap-5"
        >
          {conditions.map((condition, idx) => {
            // Pull per-condition images from the registry (undefined = use default)
            const imgs = conditionImageMap[condition.title] ?? {}
            return (
              <motion.div key={idx} variants={itemVariants}>
                <PhysioServiceCard
                  title={condition.title}
                  description={condition.description}
                  mainImage={imgs.image1}
                  stackImageTop={imgs.image2}
                  stackImageBottom={imgs.image3}
                  mainImageAlt={condition.title}
                  stackImageTopAlt={`${condition.title} detail`}
                  stackImageBottomAlt={`${condition.title} exercise`}
                />
              </motion.div>
            )
          })}
        </motion.div>

      </div>
    </section>
  )
}