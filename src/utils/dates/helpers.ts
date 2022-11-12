import {monthNames} from './constants'
import type {YearMonthDayString} from './types'

export function formatDate(date: Date | YearMonthDayString): string {
  let year = 0
  let month = 0
  let day = 0

  if (typeof date === 'string') {
    ;[year, month, day] = date.split('-').map(value => Number.parseInt(value, 10))
  } else {
    day = date.getDate()
    year = date.getFullYear()
  }

  const monthName = monthNames[month]

  return `${monthName} ${day}, ${year}`
}
