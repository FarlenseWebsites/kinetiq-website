import React from "react"
import { cn } from "../../lib/utils"

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const BookConsultationButton = ({ className, ...props }: Props) => {
  return (
    <button
      className={cn(`
  inline-flex items-center justify-center
  rounded-lg
  bg-white
  text-[#373355]
  px-6
  py-2

  font-semibold
  border border-black
  shadow-md
  hover:bg-[#68628e] hover:text-white hover:shadow-xl hover:border-0
  active:bg-[#373355] active:text-white active:border-0
  transition-all duration-300
  whitespace-nowrap
`, className)}
      {...props}
    >
      Book a Consultation
    </button>
  )
}

export default BookConsultationButton