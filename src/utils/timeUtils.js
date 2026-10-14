export function formatRelativeTime(dateString) {
  const date = new Date(dateString)
  if (!dateString || Number.isNaN(date.getTime())) return ''

  const seconds = Math.floor((Date.now() - date) / 1000)
  if (seconds < 60) return 'agora mesmo'

  const minutes = Math.floor(seconds / 60)
  if (minutes < 60) return `há ${minutes} min`

  const hours = Math.floor(minutes / 60)
  if (hours < 24) return `há ${hours} ${hours === 1 ? 'hora' : 'horas'}`

  const days = Math.floor(hours / 24)
  if (days < 30) return `há ${days} ${days === 1 ? 'dia' : 'dias'}`

  const months = Math.floor(days / 30)
  if (months < 12) return `há ${months} ${months === 1 ? 'mês' : 'meses'}`

  const years = Math.floor(months / 12)
  return `há ${years} ${years === 1 ? 'ano' : 'anos'}`
}
