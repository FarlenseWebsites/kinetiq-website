"use client"

import { motion } from "framer-motion"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 min-h-[100svh] overflow-hidden pointer-events-none">
      <style>{`
        .hero-bg-clip {
          /* sm (default mobile) */
          clip-path: ellipse(75% 92% at 50% -30%);
        }
        @media (min-width: 768px) {
          /* md */
          .hero-bg-clip {
            clip-path: ellipse(72% 68% at 50% -10%);
          }
        }
        @media (min-width: 1024px) {
          /* lg */
          .hero-bg-clip {
            clip-path: ellipse(72% 86% at 50% 0%);
          }
        }
        @media (min-width: 1280px) {
          /* xl */
          .hero-bg-clip {
            clip-path: ellipse(58% 86% at 50% 0%);
          }
        }
      `}</style>
      
      <motion.div
        initial={{ y: "-30%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute inset-0 hero-bg-clip"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #dcd8e8 20%, #68628E 90%, #373355 100%)",
          boxShadow: "0 30px 100px -20px rgba(126, 121, 153, 0.4)",
        }}
      />
    </div>
  )
}