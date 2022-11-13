import {PageGroup} from '../../constants'
import {InternalLink} from '../links'

import styles from './styles.module.scss'

export interface HeaderProps {
  noName?: boolean
  pageGroup?: PageGroup
}

export function Header(props: HeaderProps) {
  const {noName = false, pageGroup} = props

  return (
    <header className={styles.Header}>
      <div className="container">
        {noName !== true && (
          <InternalLink className={styles.SiteTitle} href="/">
            Jeremy Neander
          </InternalLink>
        )}

        <nav>
          <InternalLink
            className={`section ${pageGroup === PageGroup.WRITING ? 'current' : ''}`}
            href="/writing"
          >
            Writing
          </InternalLink>

          <InternalLink
            className={`section ${pageGroup === PageGroup.RESUME ? 'current' : ''}`}
            href="/resume"
          >
            Resume
          </InternalLink>
        </nav>
      </div>
    </header>
  )
}
