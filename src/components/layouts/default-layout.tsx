import {LayoutBase} from './layout-base'
import type {LayoutProps} from './types'

export function DefaultLayout(props: LayoutProps) {
  const {children, ...layoutProps} = props

  return (
    <LayoutBase {...layoutProps}>
      <main className="container">{children}</main>
    </LayoutBase>
  )
}
