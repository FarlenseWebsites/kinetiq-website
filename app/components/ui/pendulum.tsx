"use client"

import { motion } from "framer-motion"

export default function Pendulum() {
  return (
    <div className="relative flex items-start justify-center gap-0 w-full">
      
      {/* 1. Grid Background — above glow so white lines read against the lavender backdrop */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none z-0"
        style={{
          width: '120vw',
          maxWidth: '1200px',
          height: '600px',
          transform: 'translate(-50%, -50%)',
          backgroundImage: `linear-gradient(to right, rgba(210, 208, 221, 0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(210, 208, 221, 0.5) 1px, transparent 1px)`,
          backgroundSize: '52px 52px',
          WebkitMaskImage:
            'radial-gradient(ellipse 45% 40% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)',
          maskImage:
            'radial-gradient(ellipse 45% 40% at 50% 50%, rgba(0,0,0,0.6) 0%, rgba(0,0,0,0.3) 45%, transparent 70%)',
        }}
      />

      {/* 2. Radial Gradient Glow — tied to the pendulum */}
      <div
        className="absolute top-1/2 left-1/2 pointer-events-none -z-10"
        style={{
          width: "900px",
          height: "500px",
          transform: "translate(-50%, -40%) scaleX(1.35)", 
          borderRadius: "50%",
          background: `
            radial-gradient(circle at center,
              rgba(134, 129, 165, 0.40) 0%,
              rgba(244, 244, 244, 0.61) 60%,
              transparent 100%
            )
          `,
          filter: "blur(55px)",
        }}
      />

      {/* 3. Ball 1 — swings left */}
      <motion.div
        className="relative w-[60px] sm:w-[70px] md:w-[74px] h-[180px] sm:h-[220px] md:h-[260px] origin-top flex flex-col items-center z-10"
        animate={{ rotate: [35, 0, 0, 0, 35] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
          ease: ["easeIn", "linear", "linear", "easeOut"] as const,
        }}
      >
        <div className="w-[2px] flex-1" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 55%)' }} />
        <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] bg-white rounded-full shrink-0 -mt-px shadow-md" />
      </motion.div>

      {/* 4. Balls 2-4 — stationary */}
      {[1, 2, 3].map((i) => (
        <div key={i} className="relative w-[60px] sm:w-[70px] md:w-[74px] h-[180px] sm:h-[220px] md:h-[260px] flex flex-col items-center z-10">
          <div className="w-[2px] flex-1" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 55%)' }} />
          <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] bg-white rounded-full shrink-0 -mt-px shadow-md" />
        </div>
      ))}

      {/* 5. Ball 5 — swings right */}
      <motion.div
        className="relative w-[60px] sm:w-[70px] md:w-[74px] h-[180px] sm:h-[220px] md:h-[260px] origin-top flex flex-col items-center z-10"
        animate={{ rotate: [0, 0, -35, 0, 0] }}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          times: [0, 0.25, 0.5, 0.75, 1],
          ease: ["linear", "easeOut", "easeIn", "linear"] as const,
        }}
      >
        <div className="w-[2px] flex-1" style={{ background: 'linear-gradient(to bottom, transparent 0%, rgba(255,255,255,0.85) 55%)' }} />
        <div className="w-[56px] h-[56px] sm:w-[66px] sm:h-[66px] md:w-[70px] md:h-[70px] bg-white rounded-full shrink-0 -mt-px shadow-md" />
      </motion.div>

    </div>
  )
}