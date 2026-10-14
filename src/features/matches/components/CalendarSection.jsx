import { useState } from 'react'

import AsyncContent from '@/components/ui/AsyncContent.jsx'

import { useCalendar } from '../hooks/useCalendar.js'
import { groupByCompetition,groupByDay } from '../utils/groupMatchesUtils.js'
import DateTabs from './DateTabs.jsx'
import MatchGroup from './MatchGroup.jsx'

export default function CalendarSection() {
  const { data: matches, loading, error } = useCalendar()
  const [selectedDay, setSelectedDay] = useState(null)

  const days = groupByDay(matches ?? [])
  const activeDay = days.find((day) => day.day === selectedDay) ?? days[0]
  const groups = groupByCompetition(activeDay?.matches ?? [])

  return (
    <section>
      <AsyncContent
        loading={loading}
        error={error}
        isEmpty={!days.length}
        loadingText="Carregando calendário..."
        errorText="Erro ao carregar os jogos."
        emptyText="Nenhum jogo nesta semana."
      >
        <DateTabs
          days={days.map((day) => day.day)}
          selectedDay={activeDay?.day}
          onSelect={setSelectedDay}
        />

        <div className="mt-3">
          {groups.map((group) => (
            <MatchGroup key={group.name} {...group} />
          ))}
        </div>
      </AsyncContent>
    </section>
  )
}
