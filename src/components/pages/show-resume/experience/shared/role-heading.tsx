import type {ReactNode} from 'react'

import styles from './styles.module.scss'

export interface RoleHeadingProps {
  children: ReactNode
  role: string
}

export function RoleHeading(props: RoleHeadingProps) {
  const {children, role} = props

  return (
    <h3 className={styles.RoleHeading}>
      <span className={styles.Role}>{role}</span> : {children}
    </h3>
  )
}
