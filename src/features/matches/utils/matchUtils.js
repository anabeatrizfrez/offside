import { formatTime } from './formatUtils.js'

function toTeam(competitor) {
  return {
    name: competitor?.team?.shortDisplayName ?? competitor?.team?.displayName ?? '—',
    logo: competitor?.team?.logo ?? null,
    score: competitor?.score ?? null,
  }
}

export function normalizeMatch(event) {
  const competitors = event.competitions?.[0]?.competitors ?? []
  const home = competitors.find((c) => c.homeAway === 'home') ?? competitors[0]
  const away = competitors.find((c) => c.homeAway === 'away') ?? competitors[1]
  const type = event.status?.type

  return {
    id: `${event.competition.slug}-${event.id}`,
    startsAt: event.date,
    competitionName: event.competition.name,
    home: toTeam(home),
    away: toTeam(away),
    state: type?.state ?? 'pre',
    isPostponed: type?.name === 'STATUS_POSTPONED',
    clock: event.status?.displayClock ?? null,
  }
}

export function getStatusLabel({ state, startsAt, isPostponed, clock }) {
  if (isPostponed) return 'Adiado'
  if (state === 'pre') return `${formatTime(startsAt)}h`
  if (state === 'in') return clock ?? 'Ao vivo'
  return 'Encerrado'
}