import { toDayKey } from './dateUtils.js'

function groupBy(items, getKey) {
  const groups = new Map()

  items.forEach((item) => {
    const key = getKey(item)
    if (!groups.has(key)) groups.set(key, [])
    groups.get(key).push(item)
  })

  return groups
}

export function groupByDay(matches) {
  const groups = groupBy(matches, (match) => toDayKey(new Date(match.startsAt)))

  return [...groups]
    .sort(([a], [b]) => a.localeCompare(b))
    .map(([day, dayMatches]) => ({ day, matches: dayMatches }))
}

export function groupByCompetition(matches) {
  const groups = groupBy(matches, (match) => match.competitionName)

  return [...groups].map(([name, competitionMatches]) => ({ name, matches: competitionMatches }))
}
