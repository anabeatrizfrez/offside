import AsyncContent from '@/components/ui/AsyncContent.jsx'

import { useStandings } from '../hooks/useStandings.js'

export default function ClassificationsList() {
  const competition = 'bra.1'
  const name = 'Campeonato Brasileiro Série A'

  const { data: groups, loading, error } = useStandings(competition)

  return (
    <section className="container-app">
      <AsyncContent
        loading={loading}
        error={error}
        isEmpty={!groups?.length}
        loadingText="Carregando classificação..."
        errorText="Erro ao carregar a classificação."
        emptyText="Esta competição não tem tabela."
      >
        {groups?.map((group) => (
          <div key={group.name}>
            <h1>{name} {group.name}</h1>
            {group.rows.map((row) => (
              <p key={row.team}>{row.rank}. {row.team} - {row.points} pts</p>
            ))}
          </div>
        ))}
      </AsyncContent>
    </section>
  )
}