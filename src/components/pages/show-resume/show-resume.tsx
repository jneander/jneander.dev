import {PageGroup} from '../../../constants'
import {DefaultLayout} from '../../layouts'
import {EighthLight, Instructure} from './experience'
import {Overview} from './overview'

export function ShowResume() {
  return (
    <DefaultLayout pageGroup={PageGroup.RESUME}>
      <div className="download-link">
        <a href="https://docs.google.com/document/d/1SAU58e4Xm-hONomFHzZrFUEczRyqDfuB896gMhj-rkU/export?format=pdf">
          PDF
          <span className="download-text">
            <i className="fa fa-file-pdf-o download-icon"></i>
          </span>
        </a>
      </div>

      <section className="resume">
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
