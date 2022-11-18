import {LayoutBase} from './layout-base'
import type {LayoutProps} from './types'

import styles from './styles.module.scss'

export function SlimLayout(props: LayoutProps) {
  const {children, ...layoutProps} = props

  const mainClassName = [styles.Container, styles.SlimContainer].join(' ')

  return (
    <LayoutBase {...layoutProps}>
      <main className={mainClassName}>{children}</main>
    </LayoutBase>
  )
}
