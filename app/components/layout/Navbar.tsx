"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

import { cn } from "../../lib/utils"
import BookConsultationButton from "../ui/bookConsulationButton"

import KinetiQLogo from "../../../public/KinetiQLogo.png"

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const navItems = [
    "Physiotherapy",
    "KinetiQ Sessions",
    "Treatment",
    "About Us",
    "Contact Us",
  ]

  return (
    <header
      className={cn(`
        absolute top-0 left-0 right-0 z-50
        w-full

        px-4
        sm:px-6
        md:px-8
        lg:px-12
        xl:px-16

        py-4
        md:py-5

        bg-transparent

        transition-all duration-300
      `)}
    >
      <div
        className="
          max-w-7xl
          mx-auto

          flex items-center justify-between
          gap-4
        "
      >

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center flex-shrink-0"
        >
          <Image
            src={KinetiQLogo}
            alt="KinetiQ Logo"
            priority
            className="
              w-28
              sm:w-32
              md:w-36
              lg:w-44
              xl:w-48
              h-auto
            "
          />
        </Link>

        {/* Desktop Navigation */}
        <nav
          className="
            hidden
            lg:flex

            items-center
            gap-6
            xl:gap-8

            min-w-0
          "
        >
          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              className="
                text-sm
                xl:text-[15px]

                font-medium
                whitespace-nowrap

                text-[#373355]

                hover:text-[#986c55]

                transition-colors duration-300
              "
            >
              {item}
            </Link>
          ))}
        </nav>

        {/* Right Side */}
        <div
          className="
            flex items-center
            gap-2
            sm:gap-4

            flex-shrink-0
          "
        >

          {/* CTA Button */}
         <BookConsultationButton
  className="
    hidden lg:inline-flex

    bg-[#ff914d]

    border-none

    hover:bg-[#68638E]
    hover:text-white

    active:bg-[#373355]
  "
/>

          {/* Mobile Menu Toggle */}
          <button
            aria-label="Toggle Menu"
            className="
              lg:hidden

              p-2

              flex items-center justify-center

              text-[#373355]

              hover:text-[#ff914d]

              transition-colors duration-300
            "
            onClick={() =>
              setIsMobileMenuOpen(!isMobileMenuOpen)
            }
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={cn(`
          lg:hidden

          absolute top-full left-0 right-0

          overflow-hidden

          bg-white/95
          backdrop-blur-md

          border-t border-slate-200

          shadow-xl

          transition-all duration-300 ease-in-out
        `,
          isMobileMenuOpen
            ? "max-h-[500px] opacity-100 py-6"
            : "max-h-0 opacity-0 py-0 pointer-events-none"
        )}
      >
        <div
          className="
            px-6

            flex flex-col

            gap-1
          "
        >

          {navItems.map((item) => (
            <Link
              key={item}
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              className="
                py-3

                text-sm
                font-medium

                text-[#373355]

                hover:text-[#986c55]

                transition-colors duration-300
              "
            >
              {item}
            </Link>
          ))}

          <div className="pt-3 mt-1 border-t border-slate-100">
            <BookConsultationButton
              className="
                w-full justify-center
                bg-[#ff914d]
                border-none
                hover:bg-[#68638E] hover:text-white
                active:bg-[#373355]
              "
              onClick={() => setIsMobileMenuOpen(false)}
            />
          </div>
        </div>
      </div>
    </header>
  )
}