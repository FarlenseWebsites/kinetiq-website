import type { Metadata } from "next"
import PhysioHero from "../components/physiotherapy/PhysioHero"
import PhysioServicesSection from "../components/physiotherapy/treatmentPhysio"
import ConditionsSection from "../components/physiotherapy/LifestylePostureConditions"
import CTA from "../components/home/CTA"
import TreatmentWomen from "../components/physiotherapy/treatmentWomen"
import ServicesBanner from "../components/physiotherapy/servicesBanner"
import ServicesSection from "../components/physiotherapy/servicesSections"

export const metadata: Metadata = {
  title: "Physiotherapy & Services",
  description:
    "Explore KinetiQ's full range of physiotherapy services — from orthopaedic and sports rehab to neurological and pediatric care.",
}

export default function PhysiotherapyPage() {
  return (
    <div className="bg-[#F4F4F4]">
      <PhysioHero />
      <PhysioServicesSection />
      <TreatmentWomen />
      <ServicesBanner />
      <ServicesSection />
      <ConditionsSection />
      <CTA />
    </div>
  )
}
