const byDate = (a, b) => new Date(a.date) - new Date(b.date)

const isFinished = (event) => event.status?.type?.state === 'post'
const byFinished = (a, b) => Number(isFinished(a)) - Number(isFinished(b))

function createRank(competitionList) {
  const positions = new Map(competitionList.map((competition, index) => [competition.slug, index]))
  return (event) => positions.get(event.competition.slug) ?? Number.MAX_SAFE_INTEGER
}

export function sortByTimeThenCompetition(events, competitionList) {
  const rank = createRank(competitionList)
  return [...events].sort((a, b) => byFinished(a, b) || byDate(a, b) || rank(a) - rank(b))
}

export function sortByCompetitionThenTime(events, competitionList) {
  const rank = createRank(competitionList)
  return [...events].sort((a, b) => rank(a) - rank(b) || byDate(a, b))
}