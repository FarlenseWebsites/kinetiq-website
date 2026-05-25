import type { Metadata } from "next"
import SessionsHero from "../components/kinetiqSessions/SessionsHero"
import SessionsServices from "../components/kinetiqSessions/SessionsServices"
import CTA from "../components/home/CTA"

export const metadata: Metadata = {
  title: "KinetiQ Sessions",
  description:
    "Choose your preferred way to access physiotherapy — in-centre, home visits, online, or corporate wellness programs.",
}

export default function KinetiQSessionsPage() {
  return (
    <div className="bg-[#F4F4F4]">
      <SessionsHero />
      <SessionsServices />
      <CTA />
    </div>
  )
}
