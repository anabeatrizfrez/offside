import { getNews } from '@/api/endpoints.js'
import { competitionList } from '@/data/competitions/index.js'

import { removeDuplicates } from '../utils/duplicateUtils.js'
import { normalizeArticle, putMainLeaguesFirst, sortByMostRecent, splitFeatured } from '../utils/newsUtils.js'

async function fetchCompetitionNews(competition) {
  try {
    const data = await getNews(competition.slug)
    return (data.articles ?? []).map((article) => normalizeArticle(article, competition))
  } catch {
    return []
  }
}

export async function getTopNews(restLimit) {
  const results = await Promise.all(competitionList.map(fetchCompetitionNews))
  const unique = removeDuplicates(putMainLeaguesFirst(results.flat()))
  const { featured, rest } = splitFeatured(sortByMostRecent(unique))

  return { featured, rest: rest.slice(0, restLimit) }
}