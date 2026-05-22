"use client"

import { motion } from "framer-motion"

export default function OrangeCircles() {
  return (
    <div
      className="flex w-full items-center justify-center overflow-hidden"
      style={{
        paddingInline: "clamp(0.5rem, 2vw, 2rem)",
        paddingBlock: "clamp(0.75rem, 2svh, 1.5rem)",
      }}
    >
      <div
        className="flex w-full max-w-[min(42rem,100%)] flex-wrap items-center justify-center"
        style={{
          gap: "clamp(0rem, 0.45vw, 0.35rem)",
        }}
      >
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            initial={{ backgroundColor: "#FF914D" }}
            animate={{ backgroundColor: "#FF914D" }}
            whileHover={{
              backgroundColor: ["#FF914D", "#68628E", "#373355", "#68628E"],
              scale: 1.05,
              transition: {
                duration: 0.4,
                times: [0, 0.33, 0.66, 1],
                ease: "easeInOut",
              }
            }}
            className="shrink-0 rounded-full cursor-pointer"
            style={{
              width: "clamp(1rem, 2.6vw + 0.35vh, 3rem)",
              height: "clamp(1rem, 2.6vw + 0.35vh, 3rem)",
            }}
          />
        ))}
      </div>
    </div>
  )
}