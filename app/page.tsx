import NewLanding from "./components/home/newlanding"
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
      <NewLanding />
      <Services />
      <BannerFeature />
      <Spaces />
      <VideoGallery />
      <CTA />
    </>
  )
}
