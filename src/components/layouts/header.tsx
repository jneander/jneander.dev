import {PageGroup} from '../../constants'
import {InternalLink} from '../links'

export interface HeaderProps {
  noName?: boolean
  pageGroup?: PageGroup
}

export function Header(props: HeaderProps) {
  const {noName = false, pageGroup} = props

  return (
    <header className="site-header">
      <div className="container">
        {noName !== true && (
          <InternalLink className="site-title" href="/">
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
