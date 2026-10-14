import { monthLabels,weekDays } from '@/data/dates.js'

export function formatTime(isoString) {
  return new Date(isoString).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })
}

export function formatToday() {
  const today = new Date()
  const day = String(today.getDate()).padStart(2, '0')

  return `${weekDays[today.getDay()]}, ${day} ${monthLabels[today.getMonth()]}`
}
