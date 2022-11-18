import {LayoutBase} from './layout-base'
import type {LayoutProps} from './types'

import styles from './styles.module.scss'

export function DefaultLayout(props: LayoutProps) {
  const {children, ...layoutProps} = props

  return (
    <LayoutBase {...layoutProps}>
      <main className={styles.Container}>{children}</main>
    </LayoutBase>
  )
}
