import React from "react"
import { cn } from "../../lib/utils"

interface Props extends React.AnchorHTMLAttributes<HTMLAnchorElement> {}

const BookConsultationButton = ({ className, ...props }: Props) => {
  return (
    <a
      href="https://wa.me/919319606763?text=Hi!%20I%27d%20like%20to%20book%20a%20consultation."
      target="_blank"
      rel="noopener noreferrer"
      className={cn(`
  inline-flex items-center justify-center
  rounded-lg
  bg-white
  text-[#373355]
  px-6
  py-2

  font-medium
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
    </a>
  )
}

export default BookConsultationButton