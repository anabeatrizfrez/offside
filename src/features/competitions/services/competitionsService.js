import { getCalendar, getLeague, getScoreboard } from '@/api/endpoints.js'
import { competitions } from '@/data/competitions/index.js'

import { phases } from '../data/phases/index.js'
import { getLocalLogo, getLogo } from '../utils/logoUtils.js'
import { getSeason } from '../utils/seasonUtils.js'
import { getStatus } from '../utils/statusUtils.js'

function buildLinkItem(competition) {
  return {
    slug: competition.slug,
    name: competition.name,
    logo: getLocalLogo(competition.slug),
    region: competition.region,
    year: competition.year,
    to: competition.route,
  }
}

async function buildApiItem(competition) {
  const league = await getLeague(competition.slug)
  const [scoreboard, calendar] = await Promise.all([
    getScoreboard(competition.slug),
    getCalendar(competition.slug, league.season.year),
  ])

  return {
    slug: competition.slug,
    name: competition.name,
    logo: getLogo(league.logos, competition.slug),
    region: league.country?.name ?? competition.region,
    year: getSeason(calendar),
    status: getStatus(scoreboard, calendar, phases),
    to: `/championship/${competition.slug}`,
  }
}

async function buildItem(competition) {
  if (competition.isLink) return buildLinkItem(competition)

  try {
    return await buildApiItem(competition)
  } catch {
    return null
  }
}

export function getCompetitionGroups(limit) {
  return Promise.all(
    competitions.map(async (group) => {
      const items = await Promise.all(group.competitions.slice(0, limit).map(buildItem))
      return { title: group.title, competitions: items.filter(Boolean) }
    })
  )
}