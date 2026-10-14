import MatchCard from './MatchCard.jsx'

export default function MatchGroup({ name, matches }) {
  return (
    <div className="mb-4">
      <h4 className="text-xs font-bold text-gray-500 uppercase mb-1">{name}</h4>

      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}
    </div>
  )
}
