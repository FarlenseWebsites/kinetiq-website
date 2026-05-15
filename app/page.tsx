import HeroLanding from "./components/home/HeroLanding"
import RehabIntro from "./components/home/RehabIntro"
import Services from "./components/home/Services"
import RehabFeature from "./components/home/RehabFeature"
import Spaces from "./components/home/Spaces"
import EquipmentGallery from "./components/home/EquipmentGallery"
import CTA from "./components/home/CTA"

export default function Home() {
  return (
    <>
      <HeroLanding />
      <RehabIntro />
      <Services />
      <RehabFeature />
      <Spaces />
      <EquipmentGallery />
      <CTA />
    </>
  )
}
