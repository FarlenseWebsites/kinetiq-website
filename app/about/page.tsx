import type { Metadata } from "next"
import AboutHero from "../components/about/AboutHero"
import AboutIntro from "../components/about/AboutIntro"
import ValuesSection from "../components/about/ValuesSection"
import TeamSection from "../components/about/TeamSection"
import FormMethod from "../components/about/FormMethod"
import EventsSection from "../components/about/EventsSection"
import CTA from "../components/home/CTA"
import TvvideoSection from "../components/about/Video"
import UpcomingEvents from "../components/about/upcomingEvents"

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about KinetiQ — our story, values, team, and the science behind our approach to physiotherapy and functional wellness.",
}

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutIntro />
      <ValuesSection />
      <TvvideoSection />
      <TeamSection />
      <FormMethod />
      <EventsSection />
      <UpcomingEvents />
      <CTA />
    </>
  )
}
