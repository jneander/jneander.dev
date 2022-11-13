import {PageGroup} from '../../../constants'
import {IconPdf} from '../../icons'
import {DefaultLayout} from '../../layouts'
import {EighthLight, Instructure} from './experience'
import {Overview} from './overview'

import styles from './styles.module.scss'

export function ShowResume() {
  return (
    <DefaultLayout pageGroup={PageGroup.RESUME}>
      <a
        className={styles.DownloadLink}
        href="https://docs.google.com/document/d/1SAU58e4Xm-hONomFHzZrFUEczRyqDfuB896gMhj-rkU/export?format=pdf"
      >
        <IconPdf className={styles.IconPdf} />

        <span className="visually-hidden">Download PDF</span>
      </a>

      <section className={styles.ResumeSection}>
        <header>
          <h1>Experience</h1>
        </header>

        <Instructure />

        <EighthLight />
      </section>

      <Overview />
    </DefaultLayout>
  )
}
