import type {ReactNode} from 'react'

import styles from './styles.module.scss'

export interface CompanyListProps {
  children: ReactNode
}

export function CompanyList(props: CompanyListProps) {
  const {children} = props

  return <ul className={styles.CompanyList}>{children}</ul>
}
