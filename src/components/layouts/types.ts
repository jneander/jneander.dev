import type {ReactNode} from 'react'

import {PageGroup} from '../../constants'

export interface LayoutProps {
  children: ReactNode
  noName?: boolean
  pageGroup?: PageGroup
  pageTitle?: string
}
