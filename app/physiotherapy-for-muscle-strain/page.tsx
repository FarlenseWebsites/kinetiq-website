import { serviceMetadata, ServiceRoute } from "../components/service-page/serviceRoute"
import { muscleStrainPage } from "../lib/service-pages/muscleStrain"

export const metadata = serviceMetadata(muscleStrainPage)

export default function Page() {
  return <ServiceRoute data={muscleStrainPage} />
}
