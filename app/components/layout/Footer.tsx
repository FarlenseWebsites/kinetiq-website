import Link from "next/link";
import Image from "next/image";
import { MapPin, Phone, Mail } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import kinetiqLogoWhiteCenter from "../../../public/KinetiQ Logo (white center).png";

export default function Footer() {
  return (
    <footer className="bg-[#68628E] text-[#f8f8fe] pt-16">
      
      {/* Main Footer Content */}
      <div className="px-6 md:px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-12 md:gap-x-10 items-start">

          {/* Section 1: Quick Links */}
          <div className="md:col-span-3">
            <h4 className="text-[#ff914D] italic text-lg font-medium mb-6">
              Quick Links
            </h4>

            <nav className="flex flex-col gap-4 italic font-light text-[14px] sm:text-[15px]">
              <Link href="/" className="hover:opacity-70 transition-opacity">
                Home
              </Link>

              <Link
                href="/physiotherapy"
                className="hover:opacity-70 transition-opacity"
              >
                Specialties
              </Link>
              <Link
                href="/treatment"
                className="hover:opacity-70 transition-opacity"
              >
                Treatment
              </Link>

              <Link
                href="/sessions"
                className="hover:opacity-70 transition-opacity"
              >
                Sessions
              </Link>

              <Link
                href="/contact"
                className="hover:opacity-70 transition-opacity"
              >
                Contact
              </Link>

              <Link
                href="/about"
                className="hover:opacity-70 transition-opacity"
              >
                About
              </Link>
            </nav>

            {/* Social Icons */}
            <div className="flex items-center gap-5 mt-10">
              <Link
                href="#"
                className="hover:text-[#ff914D] transition-colors"
                target="_blank"
              >
                <FaFacebook size={22} />
              </Link>

              <Link
                href="https://www.instagram.com/kinetiqphysiotherapy"
                className="hover:text-[#ff914D] transition-colors "
                target="_blank"
              >
                <FaInstagram size={22} />
              </Link>

              <Link
                href="#"
                className="hover:text-[#ff914D] transition-colors"
                target="_blank"
              >
                <FaLinkedin size={22} />

              </Link>
            </div>
          </div>

          {/* Section 2: Contact Info */}
          <div className="md:col-span-5 flex flex-col gap-8 italic font-light text-[14px] sm:text-[15px] pt-1">

            {/* Address 1 */}
            <div className="flex gap-4">
              <MapPin
                className="text-[#ff914D] shrink-0 mt-1"
                size={20}
              />

              <p className="leading-relaxed">
                2nd Floor, F 11 16/17, Golf Course Road, DLF
                <br />
                Phase 1, Sector 27, Gurugram, Haryana 122002
              </p>
            </div>

            {/* Address 2 */}
            <div className="flex gap-4">
              <MapPin
                className="text-[#ff914D] shrink-0 mt-1"
                size={20}
              />

              <p className="leading-relaxed">
                AIPL Joy Central Mall, Sector 65,
                <br />
                Gurugram, Haryana 122101
              </p>
            </div>

            {/* Phone */}
            <div className="flex gap-4 items-center">
              <Phone
                className="text-[#ff914D] shrink-0"
                size={20}
              />

              <p>+91 9319606763</p>
            </div>

            {/* Email */}
            <div className="flex gap-4 items-center">
              <Mail
                className="text-[#ff914D] shrink-0"
                size={20}
              />

              <p className="break-all sm:break-normal">
                info@kinetiqphysiotherapy.com
              </p>
            </div>
          </div>

          {/* Section 3: Logo */}
          <div className="md:col-span-4 flex flex-col items-center text-center md:-ml-8 lg:-ml-16">

            <div className="relative w-full max-w-[260px] sm:max-w-[320px] md:max-w-[380px] lg:max-w-[450px] aspect-[2/1] mb-3">
              <Image
                src={kinetiqLogoWhiteCenter}
                alt="KinetiQ Logo"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-16 w-full bg-[#373355] px-4 py-5 text-center text-[12px] sm:text-[13px] md:text-[14px] font-light tracking-[0.06em] text-white/80">
        <p>
          Copyright © KinetiQ Physiotherapy {new Date().getFullYear()}. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}