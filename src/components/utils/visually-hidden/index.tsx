import type {ElementType, ReactNode} from 'react'

import styles from './styles.module.scss'

export interface VisuallyHiddenProps {
  as?: ElementType
  children: ReactNode
}

export function VisuallyHidden(props: VisuallyHiddenProps) {
  const {as: Component = 'span', children} = props

  return <Component className={styles.VisuallyHidden}>{children}</Component>
}
