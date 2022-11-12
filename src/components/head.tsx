import {default as NextHead} from 'next/head'

export interface HeadProps {
  pageTitle?: string
}

export function Head(props: HeadProps) {
  const {pageTitle = 'Jeremy Neander'} = props

  return (
    <NextHead>
      <title>{pageTitle}</title>
    </NextHead>
  )
}
