import type { Metadata } from "next"
import JsonLd from "./components/seo/JsonLd"
import { HOME_TITLE, HOME_DESCRIPTION, homePageSchema } from "./lib/schema"
import NewLanding from "./components/home/newlanding"
import RehabFitness from "./components/home/onestopBanner"
import Services from "./components/home/Services"
import Spaces from "./components/home/Sessions"
import CTA from "./components/home/CTA"
import BannerFeature from "./components/home/BannerFeature"
import VideoGallery from "./components/home/VideoGallery"
import UpcomingEvents from "./components/home/upcomingEvents"
export const metadata: Metadata = {
  title: { absolute: HOME_TITLE },
  description: HOME_DESCRIPTION,
  alternates: { canonical: "/" },
}
export default function Home() {
  return (
    <>
      <JsonLd data={homePageSchema} />
      <NewLanding />
      <Services />
      <BannerFeature />
      <Spaces />
      <VideoGallery />
      <CTA />
    </>
  )
}
