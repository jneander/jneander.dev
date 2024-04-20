import {DateTime} from 'luxon'

import {url} from './constants'

export function absoluteUrl(path: string): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  return `${url}${cleanPath}`
}

export function writingUrl(slug: string): string {
  return `/writing/${slug}`
}

export function asIsoDate(date: Date): string {
  return DateTime.fromJSDate(date, {zone: 'UTC'}).toISODate()!
}

export function asPostDate(date: Date): string {
  return DateTime.fromJSDate(date, {zone: 'UTC'}).toLocaleString(DateTime.DATE_MED)
}
