export const columns = [
  { label: 'P', key: 'points' },
  { label: 'J', key: 'played' },
  { label: 'V', key: 'wins' },
  { label: 'E', key: 'draws' },
  { label: 'D', key: 'losses' },
  { label: 'SG', key: 'goalDiff', format: (value) => (value > 0 ? `+${value}` : value) },
]