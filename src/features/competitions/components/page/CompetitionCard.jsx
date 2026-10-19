import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function CompetitionCard({ to, logo, name, region, status }) {
  const details = [region, status].filter(Boolean).join(' - ')

  return (
    <Link to={to} className="flex items-center gap-3 border-b border-gray-200 py-3">
      <div className="h-8 w-8 shrink-0">
        {logo && <img src={logo} alt="" className="h-full w-full object-contain" />}
      </div>

      <div className="flex min-w-0 flex-1 flex-col">
        <span className="truncate font-semibold">{name}</span>
        {details && <span className="truncate text-xs text-gray-500">{details}</span>}
      </div>

      <ChevronRight size={16} className="shrink-0" />
    </Link>
  )
}