import {Head} from '../head'
import {Header} from './header'
import type {LayoutProps} from './types'

export function LayoutBase(props: LayoutProps) {
  const {children, noName, pageGroup, pageTitle} = props

  return (
    <>
      <Head pageTitle={pageTitle} />

      <Header noName={noName} pageGroup={pageGroup} />

      {children}
    </>
  )
}
