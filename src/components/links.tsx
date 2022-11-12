import Link from 'next/link'
import type {ComponentPropsWithoutRef} from 'react'

export type LinkProps = ComponentPropsWithoutRef<'a'> & {
  href: string
}

export function InternalLink(props: LinkProps) {
  return <Link {...props} />
}

export function ExternalLink(props: LinkProps) {
  return <a {...props} />
}
