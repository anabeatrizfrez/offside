import useFetch from '@/hooks/useFetch.js'

import { getMatchesByWeek } from '../services/matchesService.js'
import { getWeekRange } from '../utils/dateUtils.js'

export function useCalendar() {
  const { startDate, endDate } = getWeekRange()

  return useFetch(() => getMatchesByWeek(startDate, endDate), [startDate, endDate])
}
