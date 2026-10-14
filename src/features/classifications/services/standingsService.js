import { getStandings } from '@/api/endpoints.js'

import { normalizeStandings } from '../utils/standingUtils'

export async function getCompetitionStandings(slug) {
  if (!slug) return []

  const data = await getStandings(slug)
  
  return normalizeStandings(data)
}