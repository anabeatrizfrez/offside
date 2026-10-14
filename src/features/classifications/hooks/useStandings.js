import useFetch from '@/hooks/useFetch.js'

import { getCompetitionStandings } from '../services/standingsService.js'

export function useStandings(slug) {
  return useFetch(() => getCompetitionStandings(slug), [slug])
}