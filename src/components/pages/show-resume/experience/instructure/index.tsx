import {CanvasAmm} from './canvas-amm'
import {CanvasBuilds} from './canvas-builds'
import {CanvasFinalGradeOverride} from './canvas-final-grade-override'
import {CanvasMgp} from './canvas-mgp'
import {CanvasNewGradebook} from './canvas-new-gradebook'
import {InstUi} from './instui'

import styles from '../../styles.module.scss'

export function Instructure() {
  return (
    <section>
      <header className={styles.PositionHeader}>
        <h2>
          <a href="https://www.instructure.com">Instructure</a> ~ Educational Technology Company
        </h2>
      </header>

      <CanvasFinalGradeOverride />
      <CanvasAmm />
      <CanvasBuilds />
      <CanvasNewGradebook />
      <CanvasMgp />
      <InstUi />
    </section>
  )
}
