import type {ReactNode} from 'react'

import styles from '../styles.module.scss'

export interface CompanyRoleProps {
  children: ReactNode
}

export function CompanyRole(props: CompanyRoleProps) {
  const {children} = props

  return (
    <li>
      <span className={styles.Chevron} />

      <span>{children}</span>
    </li>
  )
}
