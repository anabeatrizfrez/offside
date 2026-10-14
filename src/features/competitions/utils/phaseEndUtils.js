import { months } from '@/data/dates.js'

const crossMonth = /[A-Za-zÀ-ú]{3}\s+\d+-([A-Za-zÀ-ú]{3})\s+(\d+)/
const sameMonth = /([A-Za-zÀ-ú]{3})\s+(\d+)(?:-(\d+))?/

function parseMonthAndDay(detail) {
  const cross = detail.match(crossMonth)
  if (cross) return { month: months[cross[1]], day: Number(cross[2]) }

  const same = detail.match(sameMonth)
  if (!same) return null

  return { month: months[same[1]], day: Number(same[3] ?? same[2]) }
}

export function parseDetailEndDate(detail, phaseStartDate) {
  if (!detail) return null

  const parsed = parseMonthAndDay(detail)
  if (!parsed || parsed.month === undefined) return null

  const phaseStart = phaseStartDate ? new Date(phaseStartDate) : new Date()
  const year = phaseStart.getFullYear()

  // dia + 1: a fase vale até o fim do último dia
  const end = new Date(year, parsed.month, parsed.day + 1)
  return end > phaseStart ? end : new Date(year + 1, parsed.month, parsed.day + 1)
}
