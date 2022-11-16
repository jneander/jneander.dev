import {ExternalLink} from '../../../../links'

import styles from './styles.module.scss'

export interface CompanyHeadingProps {
  description: string
  headingId?: string
  name: string
  url: string
}

export function CompanyHeading(props: CompanyHeadingProps) {
  const {description, headingId, name, url} = props

  return (
    <header className={styles.CompanyHeading}>
      <h3 id={headingId}>
        <ExternalLink href={url}>{name}</ExternalLink> ~ {description}
      </h3>
    </header>
  )
}
