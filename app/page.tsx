import HeroLanding from "./components/home/HeroLanding"
import RehabIntro from "./components/home/RehabFitness"
import Services from "./components/home/Services"
import Spaces from "./components/home/Sessions"
import EquipmentGallery from "./components/home/VideoGallery"
import CTA from "./components/home/CTA"
import BannerFeature from "./components/home/BannerFeature"

export default function Home() {
  return (
    <>
      <HeroLanding />
      <RehabIntro />
      <Services />
      <BannerFeature />
      <Spaces />
      <EquipmentGallery />
      <CTA />
    </>
  )
}
