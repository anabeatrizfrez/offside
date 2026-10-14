import { parseDetailEndDate } from './phaseEndUtils.js'

function getUpcomingStatus(calendar, now) {
  const firstDate = calendar?.eventDate?.dates?.[0]
  if (!firstDate) return null

  const start = new Date(firstDate)
  if (now >= start) return null

  const month = start.toLocaleDateString('pt-BR', { month: 'long' })
  return `${month.toUpperCase()}/${start.getFullYear()}`
}

function getMiddlePhaseStatus(phase, nextPhase, phases, now) {
  const isActive = now >= new Date(phase.startDate) && now < new Date(nextPhase.startDate)
  return isActive ? phases[phase.label] ?? phase.label : null
}

function getLastPhaseStatus(phase, phases, now) {
  const end = parseDetailEndDate(phase.detail, phase.startDate) ?? new Date(phase.endDate)

  if (now > end) return 'Encerrado'
  if (now >= new Date(phase.startDate)) return phases[phase.label] || 'Em andamento'
  return null
}

export function getStatus(scoreboard, calendar, phases) {
  const now = new Date()

  const upcoming = getUpcomingStatus(calendar, now)
  if (upcoming) return upcoming

  const round = scoreboard?.week?.number
  if (round) return `Rodada ${round}`

  const entries = calendar?.sections?.[0]?.entries ?? []

  for (let i = 0; i < entries.length; i++) {
    const isLast = i === entries.length - 1
    const status = isLast
      ? getLastPhaseStatus(entries[i], phases, now)
      : getMiddlePhaseStatus(entries[i], entries[i + 1], phases, now)

    if (status) return status
  }

  return 'Em andamento'
}
