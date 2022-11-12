import Link from 'next/link'

import {PageGroup} from '../../constants'

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
          <Link className="site-title" href="/">
            Jeremy Neander
          </Link>
        )}

        <nav>
          <Link
            className={`section ${pageGroup === PageGroup.WRITING ? 'current' : ''}`}
            href="/writing"
          >
            Writing
          </Link>

          <Link
            className={`section ${pageGroup === PageGroup.RESUME ? 'current' : ''}`}
            href="/resume"
          >
            Resume
          </Link>
        </nav>
      </div>
    </header>
  )
}
