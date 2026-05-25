"use client"

import { motion } from "framer-motion"

export default function HeroBackground() {
  return (
    <div className="absolute inset-0 z-0 min-h-[100svh] overflow-hidden pointer-events-none">
      
      <motion.div
        initial={{ y: "-30%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="
          absolute inset-0 
          /* Tailwind arbitrary values replacing the <style> tag */
          [clip-path:ellipse(75%_92%_at_50%_-30%)]
          md:[clip-path:ellipse(72%_68%_at_50%_-10%)]
          lg:[clip-path:ellipse(72%_86%_at_50%_0%)]
          xl:[clip-path:ellipse(58%_86%_at_50%_0%)]
        "
        style={{
          /* Your original gradient */
          background: "linear-gradient(180deg, #ffffff 0%, #dcd8e8 20%, #68628E 90%, #373355 100%)",
          
          /* Using drop-shadow so the shadow isn't destroyed by the clip-path */
          filter: "drop-shadow(0 30px 100px rgba(126, 121, 153, 0.4))",
        }}
      />
      
    </div>
  )
}