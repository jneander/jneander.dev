import {CompanyHeading} from '../shared'
import {CanvasAmm} from './canvas-amm'
import {CanvasBuilds} from './canvas-builds'
import {CanvasFinalGradeOverride} from './canvas-final-grade-override'
import {CanvasMgp} from './canvas-mgp'
import {CanvasNewGradebook} from './canvas-new-gradebook'
import {InstUi} from './instui'

export function Instructure() {
  return (
    <section aria-labelledby="instructure">
      <CompanyHeading
        description="Educational Technology Company"
        headingId="instructure"
        name="Instructure"
        url="https://www.instructure.com"
      />

      <CanvasFinalGradeOverride />
      <CanvasAmm />
      <CanvasBuilds />
      <CanvasNewGradebook />
      <CanvasMgp />
      <InstUi />
    </section>
  )
}
