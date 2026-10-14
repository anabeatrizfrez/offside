const pad = (n) => String(n).padStart(2, '0')

export const toDayKey = (date) =>
  `${date.getFullYear()}${pad(date.getMonth() + 1)}${pad(date.getDate())}`

export const parseDayKey = (key) =>
  new Date(Number(key.slice(0, 4)), Number(key.slice(4, 6)) - 1, Number(key.slice(6, 8)))

export const getTodayKey = () => toDayKey(new Date())

export const isOnDay = (isoString, dayKey) => toDayKey(new Date(isoString)) === dayKey

export function isInRange(isoString, startKey, endKey) {
  const key = toDayKey(new Date(isoString))
  return key >= startKey && key <= endKey
}

export function getWeekRange() {
  const start = new Date()
  start.setHours(0, 0, 0, 0)
  start.setDate(start.getDate() - start.getDay())

  const end = new Date(start)
  end.setDate(end.getDate() + 6)

  return { startDate: toDayKey(start), endDate: toDayKey(end) }
}

export function getMonthsInRange(startKey, endKey) {
  const from = parseDayKey(startKey)
  from.setDate(from.getDate() - 1)

  const to = parseDayKey(endKey)
  to.setDate(to.getDate() + 1)

  const months = []
  const cursor = new Date(from.getFullYear(), from.getMonth(), 1)

  while (cursor <= to) {
    months.push(`${cursor.getFullYear()}${pad(cursor.getMonth() + 1)}`)
    cursor.setMonth(cursor.getMonth() + 1)
  }

  return months
}
