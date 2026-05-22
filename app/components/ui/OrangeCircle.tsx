"use client"

import { motion, MotionProps } from "framer-motion"
import { cn } from "../../lib/utils"

interface OrangeCircleProps extends MotionProps {
  size?: string
  className?: string
}

export default function OrangeCircle({
  size = "clamp(1.75rem, 4vw, 5.625rem)",
  className,
  // pull out any motion props passed from outside (initial, whileInView, transition, etc.)
  ...motionProps
}: OrangeCircleProps) {
  return (
    <motion.div
      // --- default appearance & hover (can be overridden by motionProps) ---
      initial={{ backgroundColor: "#FF914D", scale: 0, opacity: 0 }}
      animate={{ backgroundColor: "#FF914D", scale: 1, opacity: 1 }}
      whileHover={{
        backgroundColor: ["#FF914D", "#68628E", "#373355", "#68628E"],
        scale: 1.05,
        transition: {
          duration: 0.4,
          times: [0, 0.33, 0.66, 1],
          ease: "easeInOut",
        },
      }}
      // --- spread caller-supplied motion props LAST so they win ---
      {...motionProps}
      className={cn("rounded-full shrink-0 cursor-pointer", className)}
      style={{ width: size, height: size }}
    />
  )
}