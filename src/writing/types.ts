import type {YearMonthDayString} from '../utils'

export type Post = {
  title: string
  description: string
  publishedAt: YearMonthDayString
  url: string
  slug: string
  content: string
  contentBundle?: string
}
