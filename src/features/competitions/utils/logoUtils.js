const localLogos = import.meta.glob('@/assets/competition-logos/*', { eager: true })

const genericLogos = ['default-team-logo', 'default-league-logo']

const isGeneric = (url) => genericLogos.some((term) => url.includes(term))

export function getLocalLogo(slug) {
  const entry = Object.entries(localLogos).find(([path]) => path.includes(`/${slug}.`))
  return entry?.[1].default ?? null
}

export function getLogo(logos, slug) {
  const apiLogo = logos?.[0]?.href
  return apiLogo && !isGeneric(apiLogo) ? apiLogo : getLocalLogo(slug)
}
