import type {ReactNode} from 'react'

import styles from './styles.module.scss'

export interface ResumeSubsectionProps {
  children: ReactNode
  headingChildren: ReactNode
}

export function ResumeSubsection(props: ResumeSubsectionProps) {
  const {children, headingChildren} = props

  return (
    <div>
      <h3 className={styles.ResumeSubsectionHeading}>{headingChildren}</h3>

      {children}
    </div>
  )
}
