import { getMonthScoreboard,getScoreboard } from '@/api/endpoints.js'
import { competitionList } from '@/data/competitions/index.js'

import { getMonthsInRange,isInRange, isOnDay } from '../utils/dateUtils.js'
import { normalizeMatch } from '../utils/matchUtils.js'
import { sortByCompetitionThenTime,sortByTimeThenCompetition } from '../utils/sortMatchesUtils.js'

async function fetchEvents(competition, request) {
  try {
    const data = await request(competition.slug)
    return (data.events ?? []).map((event) => ({ ...event, competition }))
  } catch {
    return []
  }
}

function removeRepeated(events) {
  const seen = new Set()

  return events.filter((event) => {
    const key = `${event.competition.slug}-${event.id}`
    if (seen.has(key)) return false

    seen.add(key)
    return true
  })
}

export async function getMatchesByDay(day) {
  const results = await Promise.all(
    competitionList.map((competition) =>
      fetchEvents(competition, (slug) => getScoreboard(slug, day))
    )
  )

  const events = results.flat().filter((event) => isOnDay(event.date, day))

  return sortByTimeThenCompetition(events, competitionList).map(normalizeMatch)
}

export async function getMatchesByWeek(startDate, endDate) {
  const months = getMonthsInRange(startDate, endDate)

  const results = await Promise.all(
    competitionList.flatMap((competition) =>
      months.map((month) => fetchEvents(competition, (slug) => getMonthScoreboard(slug, month)))
    )
  )

  const events = removeRepeated(
    results.flat().filter((event) => isInRange(event.date, startDate, endDate))
  )

  return sortByCompetitionThenTime(events, competitionList).map(normalizeMatch)
}
