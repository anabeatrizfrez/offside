import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

import AsyncContent from '@/components/ui/AsyncContent.jsx'

import { useCompetitionGroups } from '../../hooks/useCompetitionGroups.js'
import CompetitionGroup from './CompetitionGroup.jsx'

export default function HomeCompetitionSection({ limit, type = 'some' }) {
  const { data: groups, loading, error } = useCompetitionGroups({ limit, type })

  return (
    <section className="flex flex-col gap-6 border-t border-black pt-4">
      <div className="flex justify-between items-center wrap">
        <h2 className="text-2xl font-bold">Competições</h2>
        <Link to="/competitions" className="flex items-center gap-2">
          <p className="flex items-center hover:text-text-secondary cursor-pointer">
            Explorar todas as competições
            <ArrowRight size={16} />
          </p>
        </Link>
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