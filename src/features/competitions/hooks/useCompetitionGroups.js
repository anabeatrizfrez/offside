import useFetch from '@/hooks/useFetch.js'

import { getCompetitionGroups } from '../services/competitionsService.js'

export function useCompetitionGroups({ limit } = {}) {
  return useFetch(() => getCompetitionGroups(limit), [limit])
}