import MatchStatus from './MatchStatus.jsx'
import TeamSide from './TeamSide.jsx'

export default function MatchCard({ match }) {
  return (
    <div className="flex items-center justify-between py-3 px-2 border-b border-gray-100">
      <TeamSide team={match.home} />

      <div className="text-center px-3 min-w-16">
        <MatchStatus match={match} />
      </div>

      <TeamSide team={match.away} reverse />
    </div>
  )
}
