import AsyncContent from '@/components/ui/AsyncContent.jsx'

import { useTodayMatches } from '../hooks/useTodayMatches.js'
import { formatToday } from '../utils/formatUtils.js'
import MatchCard from './TodayMatchCard.jsx'

export default function TodayMatchesSection() {
  const { data: matches, loading, error } = useTodayMatches()

  return (
    <section>
      <div className="flex gap-3 items-center">
        <h2 className="text-lg font-bold">Jogos de hoje</h2>
        <p className="text-xs text-gray-500">{formatToday()}</p>
      </div>

      <div className="flex gap-4 mt-2">
        <AsyncContent
          loading={loading}
          error={error}
          isEmpty={!matches?.length}
          loadingText="Carregando jogos..."
          errorText="Erro ao carregar os jogos."
          emptyText="Nenhum jogo hoje."
        >
          {matches?.map((match) => (
            <MatchCard key={match.id} match={match} />
          ))}
        </AsyncContent>
      </div>
    </section>
  )
}
