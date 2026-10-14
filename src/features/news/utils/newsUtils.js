import { mainLeagueSlugs } from '../data/mainLeagues.js'

export function normalizeArticle(article, competition) {
  return {
    id: `${competition.slug}-${article.id ?? article.headline}`,
    slug: competition.slug,
    title: article.headline,
    summary: article.description,
    image: article.images?.[0]?.url ?? null,
    link: article.links?.web?.href ?? null,
    publishedAt: article.published,
    competitionName: competition.name,
  }
}

export function sortByMostRecent(articles) {
  return [...articles].sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt))
}

const isMain = (article) => mainLeagueSlugs.includes(article.slug)

export function putMainLeaguesFirst(articles) {
  return [...articles.filter(isMain), ...articles.filter((article) => !isMain(article))]
}

export function splitFeatured(articles, count = 3) {
  const featured = putMainLeaguesFirst(articles.filter((article) => article.image)).slice(0, count)
  const rest = articles.filter((article) => !featured.includes(article))

  return { featured, rest }
}