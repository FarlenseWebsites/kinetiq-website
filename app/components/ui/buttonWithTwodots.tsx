import React from "react"
import { cn } from "../../lib/utils"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string
}

const ButtonWithTwoDots = ({ label = "Book Now", className, ...props }: Props) => {
  return (
    <div className="flex items-center justify-center gap-5 mt-8">
      <button
        aria-label="Previous Slide"
        className="h-5 w-5 rounded-full bg-[#8681a5]"
      />
      <button
        className={cn(`
          rounded-full bg-[#Ff914d]
          px-8 py-2
          text-sm font-medium italic text-[#373355]
          shadow-lg transition-all duration-300
          md:px-8 md:py-2 md:text-base
        `, className)}
        {...props}
      >
        {label}
      </button>
      <button
        aria-label="Next Slide"
        className="h-5 w-5 rounded-full bg-[#8681a5]"
      />
    </div>
  )
}

export default ButtonWithTwoDots
