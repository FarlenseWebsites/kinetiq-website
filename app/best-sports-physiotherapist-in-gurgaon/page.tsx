import { serviceMetadata, ServiceRoute } from "../components/service-page/serviceRoute"
import { sportsPage } from "../lib/service-pages/sports"

export const metadata = serviceMetadata(sportsPage)

export default function Page() {
  return <ServiceRoute data={sportsPage} />
}
