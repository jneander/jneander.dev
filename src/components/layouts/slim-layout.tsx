import {LayoutBase} from './layout-base'
import type {LayoutProps} from './types'

export function SlimLayout(props: LayoutProps) {
  const {children, ...layoutProps} = props

  return (
    <LayoutBase {...layoutProps}>
      <main className="slim-container">{children}</main>
    </LayoutBase>
  )
}
