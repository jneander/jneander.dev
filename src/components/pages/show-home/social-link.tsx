import type {ComponentPropsWithoutRef} from 'react'

import type {SvgProps} from '../../icons'
import {ExternalLink} from '../../links'
import {VisuallyHidden} from '../../utils'

import styles from './styles.module.scss'

export interface SocialLinkProps
  extends Omit<ComponentPropsWithoutRef<'a'>, 'children' | 'className'> {
  SvgIcon: (props: SvgProps) => JSX.Element
  name: string
  href: string
}

export function SocialLink(props: SocialLinkProps) {
  const {SvgIcon, name, ...anchorProps} = props

  return (
    <ExternalLink {...anchorProps} className={styles.SocialLink}>
      <SvgIcon className={styles.SocialLinkIcon} />

      <VisuallyHidden>{name}</VisuallyHidden>
    </ExternalLink>
  )
}
