import { formatTime } from '../utils/formatUtils.js'


export function MatchStatus({ match }) {
  const { state, startsAt, home, away, clock, isPostponed } = match

  if (isPostponed) return <span className="text-xs text-gray-500">Adiado</span>
  if (state === 'pre') return <span className="text-xs text-gray-500">{formatTime(startsAt)}</span>

  return (
    <div className="flex flex-col items-center">
      <span className="font-bold text-sm">{home.score} - {away.score}</span>
      {state === 'in' && (
        <span className="text-[10px] text-red-600 font-semibold">{clock ?? 'Ao vivo'}</span>
      )}
    </div>
  )
}

export function TodayMatchStatus({ match }) {
  const { state, home, away } = match

  if (state == 'pre') return false

  return (
    <div className="flex flex-col justify-between">
      <span className="font-bold text-sm ${}">{home.score}</span>
      <span className="font-bold text-sm">{away.score}</span>
    </div>
  )
}