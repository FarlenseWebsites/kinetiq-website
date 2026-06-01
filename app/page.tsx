import HeroLanding from "./components/home/HeroLanding"
import RehabFitness from "./components/home/onestopBanner"
import Services from "./components/home/Services"
import Spaces from "./components/home/Sessions"
import CTA from "./components/home/CTA"
import BannerFeature from "./components/home/BannerFeature"
import VideoGallery from "./components/home/VideoGallery"
import UpcomingEvents from "./components/home/upcomingEvents"

export default function Home() {
  return (
    <>
      <HeroLanding />
      <RehabFitness />
      <Services />
      <BannerFeature />
      <Spaces />
      <VideoGallery />
      <UpcomingEvents />
      <CTA />
    </>
  )
}
