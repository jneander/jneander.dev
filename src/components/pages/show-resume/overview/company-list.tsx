import {ResumeSubsection} from '../resume-subsection'
import {Company} from './company'
import {CompanyRole} from './company-role'

import styles from './styles.module.scss'

export function CompanyList() {
  return (
    <ResumeSubsection>
      <h3>Companies</h3>

      <ul className={styles.CompanyList}>
        <Company
          description="Company Reviews and Conversations"
          name="Glassdoor"
          url="https://www.glassdoor.com"
        >
          <CompanyRole>Lead Software Engineer, November 2022–Present</CompanyRole>

          <CompanyRole>Senior Front End Engineer, July 2020–November 2022</CompanyRole>
        </Company>

        <Company
          description="Education Technology Company"
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
      </ul>
    </ResumeSubsection>
  )
}
