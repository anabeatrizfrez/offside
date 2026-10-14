import { withCache } from '@/utils/cache.js'

const urls = {
	core: 'https://sports.core.api.espn.com/v2/sports/soccer/leagues',
	site: 'https://site.api.espn.com/apis/site/v2/sports/soccer',
	web: 'https://site.web.api.espn.com/apis/v2/sports/soccer'
}

const TTL = 5 * 60 * 1000

export function apiFetch(endpoint, source, ttl = TTL) {
  const separator = endpoint.includes('?') ? '&' : '?'
  const url = `${urls[source]}${endpoint}${separator}lang=pt&region=br`

  return withCache(url, async () => {
		const response = await fetch(url)

		if (!response.ok) throw new Error(`Erro ${response.status}: ${response.statusText}`)
      
		return response.json()
	}, ttl)
}
