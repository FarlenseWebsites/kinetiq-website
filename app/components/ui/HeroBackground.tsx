"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

type Breakpoint = "sm" | "md" | "lg" | "xl"

function getBreakpoint(width: number): Breakpoint {
  if (width < 768) return "sm"
  if (width < 1024) return "md"
  if (width < 1280) return "lg"
  return "xl"
}

const clipPaths: Record<Breakpoint, string> = {
  sm: "ellipse(75% 92% at 50% 0%)",
  md: "ellipse(82% 88% at 50% 0%)",
  lg: "ellipse(72% 86% at 50% 0%)",
  xl: "ellipse(58% 86% at 50% 0%)",
}

export default function HeroBackground() {
  const [breakpoint, setBreakpoint] = useState<Breakpoint>("sm")

  useEffect(() => {
    const update = () => setBreakpoint(getBreakpoint(window.innerWidth))
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0" style={{ minHeight: "100svh" }}>
      <motion.div
        initial={{ y: "-30%", opacity: 0 }}
        animate={{ y: "0%", opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className="absolute inset-0"
        style={{
          background: "linear-gradient(180deg, #ffffff 0%, #dcd8e8 20%, #68628E 90%,#373355 100%)",
          boxShadow: "0 30px 100px -20px rgba(126, 121, 153, 0.4)",
          clipPath: clipPaths[breakpoint],
        }}
      />
    </div>
  )
}
