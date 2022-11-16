import {PageGroup} from '../../../constants'
import {IconPdf} from '../../icons'
import {DefaultLayout} from '../../layouts'
import {EighthLight, Instructure} from './experience'
import {
  CompanyList,
  SkillList,
  apiSkills,
  languageSkills,
  librarySkills,
  practiceSkills,
} from './overview'
import {ResumeSection} from './resume-section'

import styles from './styles.module.scss'

export function ShowResume() {
  return (
    <DefaultLayout pageGroup={PageGroup.RESUME}>
      <header className={styles.Header}>
        <h1>Resume</h1>

        <a
          className={styles.DownloadLink}
          href="https://docs.google.com/document/d/1SAU58e4Xm-hONomFHzZrFUEczRyqDfuB896gMhj-rkU/export?format=pdf"
        >
          <IconPdf className={styles.IconPdf} />

          <span className="visually-hidden">Download PDF</span>
        </a>
      </header>

      <ResumeSection headingChildren="Experience" headingId="experience">
        <Instructure />

        <EighthLight />
      </ResumeSection>

      <ResumeSection headingChildren="Overview" headingId="overview">
        <CompanyList />

        <SkillList skills={languageSkills} title="Languages" />

        <SkillList skills={librarySkills} title="Libraries, Frameworks, and SDKs" />

        <SkillList skills={apiSkills} title="APIs" />

        <SkillList skills={practiceSkills} title="Practices" />
      </ResumeSection>
    </DefaultLayout>
  )
}
