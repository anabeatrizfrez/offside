import useFetch from '@/hooks/useFetch.js'

import { getCompetitionGroups } from '../services/competitionsService.js'

export function useCompetitionGroups({ limit, type } = {}) {
  return useFetch(() => getCompetitionGroups(limit, type), [limit, type])
}