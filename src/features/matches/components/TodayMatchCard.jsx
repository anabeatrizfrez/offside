import { getStatusLabel } from '../utils/matchUtils.js'
import { TodayMatchStatus } from './MatchStatus.jsx'
import TeamSide from './TeamSide.jsx'

export default function MatchCard({ match }) {
  const { home, away, competitionName, state } = match

  return (
    <div className="flex justify-between gap-4 border-r border-gray-200 p-2 h-38 min-w-48">
      <div className="flex flex-col justify-between gap-2">

        <span className="text-[11px] font-bold uppercase text-gray-500">
          {competitionName}
        </span>

        <div className="flex">
          <div className="flex flex-col gap-2 min-w-32">
            <TeamSide team={home} />
            <TeamSide team={away} />
          </div>
          <TodayMatchStatus match={match} />
        </div>

        <span className={`text-xs ${state === 'in' ? 'font-semibold text-red-600' : 'text-gray-400'}`}>
          {getStatusLabel(match)}
        </span>
      </div>

    </div>
  )
}