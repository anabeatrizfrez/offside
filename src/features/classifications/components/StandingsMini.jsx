import AsyncContent from '@/components/ui/AsyncContent.jsx'

import { useStandings } from '../hooks/useStandings.js'
import StandingsTable from './StandingsTable.jsx'

export default function StandingsMini({ slug = 'bra.1', limit = 12, subtitle }) {
  const { data: groups, loading, error } = useStandings(slug)
  const rows = groups?.[0]?.rows.slice(0, limit) ?? []

  return (
    <section className="flex flex-col gap-3">
      <div className="flex items-baseline justify-between">
        <h3 className="font-bold">Classificação • Top {limit}</h3>
        {subtitle && <span className="text-xs text-gray-400">{subtitle}</span>}
      </div>

      <AsyncContent
        loading={loading}
        error={error}
        isEmpty={!rows.length}
        loadingText="Carregando classificação..."
        errorText="Erro ao carregar a classificação."
        emptyText="Classificação indisponível."
      >
        <StandingsTable rows={rows} />
      </AsyncContent>
    </section>
  )
}