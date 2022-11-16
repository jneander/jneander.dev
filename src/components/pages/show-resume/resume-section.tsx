import type {ReactNode} from 'react'

import styles from './styles.module.scss'

export interface ResumeSectionProps {
  children: ReactNode
  headingId: string
  headingChildren: ReactNode
}

export function ResumeSection(props: ResumeSectionProps) {
  const {children, headingChildren, headingId} = props

  return (
    <section aria-labelledby={headingId} className={styles.ResumeSection}>
      <h2 className={styles.ResumeSectionHeading} id={headingId}>
        {headingChildren}
      </h2>

      {children}
    </section>
  )
}
