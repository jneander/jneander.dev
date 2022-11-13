import type {ReactNode} from 'react'

import overviewStyles from '../styles.module.scss'
import styles from './styles.module.scss'

export interface CompanyProps {
  name: string
  url: string
  description: string
  children: ReactNode
}

export function Company(props: CompanyProps) {
  const {children, description, name, url} = props

  return (
    <li>
      <span className={overviewStyles.Chevron} />

      <a href={url}>{name}</a>

      <span> ~ {description}</span>

      <ul className={styles.CompanyRoleList}>{children}</ul>
    </li>
  )
}
