"use client"

import { motion } from "framer-motion"
import ButtonWithTwoDots from "../ui/buttonWithTwodots"

const members = [
  {
    name: "Ridhima Bahuguna",
    designation: "Founder",
    role: "Presiding Officer",
    mobile: "9818347011",
    email: "ridhima@bahuguna.in",
  },
  {
    name: "Dr. Akshay Arora",
    designation: "Founder",
    role: "Member",
    mobile: "9990986515",
    email: "akshay@kinetiqphysiotherapy.com",
  },
  {
    name: "Dr. Tanushree Ganguly",
    designation: "Physiotherapist & Team Lead",
    role: "Member",
    mobile: "9915477329",
    email: "tanuganguly12@gmail.com",
  },
  {
    name: "Amrita Chatterjee",
    designation: "Lawyer",
    role: "External Member",
    mobile: "9811815606",
    email: "chatterji.amrita@gmail.com",
  },
]

const headers = ["S. No.", "Name", "Designation", "Role in ICC", "Mobile", "Email Id"]

export default function PoshSection() {
  return (
    <section id="about-posh" className="bg-[#f4f4f4] w-full overflow-hidden scroll-mt-32">
      {/* Light strip: button */}
      <div className="w-full flex flex-col items-center pb-10">
        <ButtonWithTwoDots label="Workplace Safety" />
      </div>

      {/* POSH banner: full width, matches FormMethod band */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="w-full bg-[#FF914D]"
      >
        <div className="max-w-6xl mx-auto py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 text-center">
          <h2
            className="font-bold tracking-[0.12em] text-white leading-none"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            POSH
          </h2>
          <p
            className="mt-3 font-medium text-white"
            style={{ fontSize: "clamp(0.85rem, 1vw + 0.3rem, 1rem)" }}
          >
            Prevention of Women from Sexual Harassment
          </p>
        </div>
      </motion.div>

      <div className="max-w-6xl mx-auto flex flex-col items-center py-16 sm:py-20 md:py-24 px-4 sm:px-6 md:px-8">
        <h3
          className="text-center font-semibold text-[#373355] leading-tight"
          style={{ fontSize: "clamp(1.35rem, 2vw + 0.5rem, 2rem)" }}
        >
          Internal Complaints Committee (ICC) Members
        </h3>

        {/* Desktop / tablet table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="hidden md:block mt-8 w-full overflow-hidden border border-[#68628E]/30 bg-white"
        >
          <table className="w-full border-collapse text-left text-sm text-[#373355]">
            <thead className="bg-[#68628E] text-white">
              <tr>
                {headers.map((h) => (
                  <th key={h} scope="col" className="border-l first:border-l-0 border-white/20 px-4 py-4 font-semibold text-center">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {members.map((m, i) => (
                <tr
                  key={m.email}
                  className="border-t border-[#68628E]/20 transition-colors duration-200 hover:bg-[#948FAF]/10"
                >
                  <td className="border-l first:border-l-0 border-[#68628E]/20 px-4 py-5 text-center">{i + 1}</td>
                  <td className="border-l first:border-l-0 border-[#68628E]/20 px-4 py-5 font-semibold">{m.name}</td>
                  <td className="border-l first:border-l-0 border-[#68628E]/20 px-4 py-5">{m.designation}</td>
                  <td className="border-l first:border-l-0 border-[#68628E]/20 px-4 py-5">{m.role}</td>
                  <td className="border-l first:border-l-0 border-[#68628E]/20 px-4 py-5 whitespace-nowrap">
                    <a href={`tel:+91${m.mobile}`} className="hover:text-[#FF914D] transition-colors">
                      {m.mobile}
                    </a>
                  </td>
                  <td className="border-l first:border-l-0 border-[#68628E]/20 px-4 py-5">
                    <a href={`mailto:${m.email}`} className="break-all hover:text-[#FF914D] transition-colors">
                      {m.email}
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>

        {/* Mobile cards */}
        <div className="md:hidden mt-8 w-full flex flex-col gap-4">
          {members.map((m, i) => (
            <motion.div
              key={m.email}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-white border border-[#68628E]/30 overflow-hidden"
            >
              <div className="bg-[#68628E] px-5 py-3 flex items-center justify-between text-white">
                <span className="font-semibold">{m.name}</span>
                <span className="text-xs text-white/80">{m.role}</span>
              </div>
              <dl className="px-5 py-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-2 text-sm text-[#373355]">
                <dt className="text-[#68628E]">Designation</dt>
                <dd>{m.designation}</dd>
                <dt className="text-[#68628E]">Mobile</dt>
                <dd>
                  <a href={`tel:+91${m.mobile}`}>{m.mobile}</a>
                </dd>
                <dt className="text-[#68628E]">Email</dt>
                <dd className="break-all">
                  <a href={`mailto:${m.email}`}>{m.email}</a>
                </dd>
              </dl>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
