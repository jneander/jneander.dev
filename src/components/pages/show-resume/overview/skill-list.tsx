import type {ReactNode} from 'react'

import {ResumeSubsection} from '../resume-subsection'

import overviewStyles from '../styles.module.scss'
import styles from './styles.module.scss'

export interface SkillListProps {
  title: ReactNode
  skills: string[]
}

export function SkillList(props: SkillListProps) {
  const {skills, title} = props

  return (
    <ResumeSubsection headingChildren={title}>
      <span className={overviewStyles.Chevron} />

      <ul className={styles.SkillList}>
        {skills.map(skill => (
          <li key={skill}>{skill}</li>
        ))}
      </ul>
    </ResumeSubsection>
  )
}
