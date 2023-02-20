import {CompanyHeading} from '../shared'
import {DiversityEquityInclusion} from './ec-dei'
import {EcPlatformTeam} from './ec-platform'
import {EmployerCenter} from './ec-wfh'
import {FedsCssStrategy} from './feds-css-strategy'
import {DesignSystem} from './feds-design-system'

export function Glassdoor() {
  return (
    <section aria-labelledby="glassdoor">
      <CompanyHeading
        description="Company Reviews and Conversations"
        headingId="glassdoor"
        name="Glassdoor"
        url="https://www.glassdoor.com"
      />

      <DesignSystem />
      <FedsCssStrategy />
      <EcPlatformTeam />
      <DiversityEquityInclusion />
      <EmployerCenter />
    </section>
  )
}
