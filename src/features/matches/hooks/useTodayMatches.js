import useFetch from '@/hooks/useFetch.js'

import { getMatchesByDay } from '../services/matchesService.js'
import { getTodayKey } from '../utils/dateUtils.js'

export function useTodayMatches() {
  const today = getTodayKey()

  return useFetch(() => getMatchesByDay(today), [today])
}
