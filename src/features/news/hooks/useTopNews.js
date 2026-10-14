import useFetch from '@/hooks/useFetch.js'

import { getTopNews } from '../services/newsService.js'

export function useTopNews({ limit } = {}) {
  return useFetch(() => getTopNews(limit), [limit])
}