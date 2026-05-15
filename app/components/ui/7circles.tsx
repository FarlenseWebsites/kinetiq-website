"use client"

import { motion } from "framer-motion"

export default function OrangeCircles() {
  return (
    <div className="flex items-center justify-center pt-4 pb-8 px-8 sm:p-8 w-full overflow-hidden">
      <div className="flex flex-row gap-0">
        {[...Array(7)].map((_, index) => (
          <motion.div
            key={index}
            // STATIC STATE: Locked at the ideal light orange
            initial={{ backgroundColor: "#FF914D" }}
            animate={{ backgroundColor: "#FF914D" }}
            
            // HOVER STATE: 0% -> 50% -> 100% transition that STOPS at the end
            whileHover={{
              // 0% (Orange) -> 50% (Mid Purple) -> 100% (Dark Purple)
              backgroundColor: ["#FF914D", "#68628E", "#373355","#68628E"],
              scale: 1.05,
              transition: { 
                duration: 0.4,
                times: [0, 0.33, 0.66, 1],
                ease: "easeInOut" 
              }
            }}
            
            className="
              w-8 h-8
              sm:w-6 sm:h-6 
              md:w-10 md:h-10
              lg:w-12 lg:h-12
              xl:w-14 xl:h-14
              rounded-full 
              cursor-pointer
              flex-shrink-0
            "
          />
        ))}
      </div>
    </div>
  )
}