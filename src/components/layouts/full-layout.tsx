import {LayoutBase} from './layout-base'
import type {LayoutProps} from './types'

export function FullLayout(props: LayoutProps) {
  const {children, ...layoutProps} = props

  return (
    <LayoutBase {...layoutProps}>
      <main>{children}</main>
    </LayoutBase>
  )
}
