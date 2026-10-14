function normalizeTitle(title) {
  return (title ?? '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, '')
    .replace(/\s+/g, ' ')
    .trim()
}

function getKeys(article) {
  const keys = []

  const linkId = article.link?.match(/\/id\/(\d+)/)?.[1]
  if (linkId) keys.push(`id:${linkId}`)

  const title = normalizeTitle(article.title)
  if (title) keys.push(`title:${title}`)

  return keys
}

export function removeDuplicates(articles) {
  const seen = new Set()

  return articles.filter((article) => {
    const keys = getKeys(article)
    if (keys.some((key) => seen.has(key))) return false

    keys.forEach((key) => seen.add(key))
    return true
  })
}