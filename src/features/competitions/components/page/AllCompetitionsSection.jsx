import AsyncContent from '@/components/ui/AsyncContent.jsx'
import { useCompetitionGroups } from '@/features/competitions/hooks/useCompetitionGroups.js'

import CompetitionGroup from './CompetitionGroup.jsx'

export default function AllCompetitionsSection() {
  const { data: groups, loading, error } = useCompetitionGroups({ type: 'all' })

  return (
    <section className="flex flex-col gap-6">
      <div className="flex justify-between items-center wrap">
        <h2 className="text-2xl font-bold">Competições</h2>
      </div>

      <AsyncContent
        loading={loading}
        error={error}
        isEmpty={!groups?.length}
        loadingText="Carregando competições..."
        errorText="Erro ao carregar as competições."
        emptyText="Nenhuma competição encontrada."
      >
        <div className="grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {groups?.map((group) => (
            <CompetitionGroup key={group.title} {...group} />
          ))}
        </div>
      </AsyncContent>
    </section>
  )
}