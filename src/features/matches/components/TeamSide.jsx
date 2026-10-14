export default function TeamSide({ team, reverse = false }) {
  return (
    <div className={`flex items-center gap-2 flex-1 ${reverse ? 'flex-row-reverse' : ''}`}>
      {team.logo && <img src={team.logo} alt="" className="w-7 h-7" />}
      <span className="text-base font-medium">{team.name}</span>
    </div>
  )
}
