import {Company} from './company'
import {CompanyList} from './company-list'
import {CompanyRole} from './company-role'
import {apiSkills, languageSkills, librarySkills, practiceSkills} from './constants'
import {SkillList} from './skill-list'

import styles from '../styles.module.scss'

export function Overview() {
  return (
    <section className={styles.ResumeSection}>
      <h1>Overview</h1>

      <h2>Positions</h2>

      <CompanyList>
        <Company
          description="Company Reviews and Conversation"
          name="Glassdoor"
          url="https://www.glassdoor.com"
        >
          <CompanyRole>Lead Software Engineer, November 2022–Present</CompanyRole>

          <CompanyRole>Senior Front End Engineer, July 2020–November 2022</CompanyRole>
        </Company>

        <Company
          description="Educational Technology Company"
          name="Instructure"
          url="https://www.instructure.com"
        >
          <CompanyRole>Senior Software Engineer, August 2018–June 2020</CompanyRole>

          <CompanyRole>Software Engineer, March 2016–August 2018</CompanyRole>
        </Company>

        <Company
          description="Software Development Consultancy"
          name="8th Light"
          url="https://www.8thlight.com"
        >
          <CompanyRole>Software Crafter, December 2012–February 2016</CompanyRole>

          <CompanyRole>Software Apprentice, June 2012–December 2012</CompanyRole>
        </Company>
      </CompanyList>

      <SkillList skills={languageSkills} title="Languages" />

      <SkillList skills={librarySkills} title="Libraries, Frameworks, and SDKs" />

      <SkillList skills={apiSkills} title="APIs" />

      <SkillList skills={practiceSkills} title="Practices" />
    </section>
  )
}
