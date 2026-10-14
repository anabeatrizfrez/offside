export function getSeason(calendar) {
  const dates = calendar?.eventDate?.dates
  if (!dates?.length) return null

  const firstYear = new Date(dates[0]).getFullYear()
  const lastYear = new Date(dates.at(-1)).getFullYear()

  return firstYear === lastYear ? firstYear : `${firstYear}/${String(lastYear).slice(2)}`
}
