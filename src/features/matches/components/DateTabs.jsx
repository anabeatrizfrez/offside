import labelsOptions from '@/data/dates.js'

import { parseDayKey } from '../utils/dateUtils.js'

export default function DateTabs({ days, selectedDay, onSelect }) {
  return (
    <div className="flex gap-2 overflow-x-auto border-b border-gray-200 pb-2">
      {days.map((day) => (
        <button
          key={day}
          onClick={() => onSelect(day)}
          className={`px-3 py-2 rounded-md text-sm whitespace-nowrap ${
            day === selectedDay ? 'bg-red-600 text-white font-bold' : 'bg-gray-100 text-gray-700'
          }`}
        >
          {parseDayKey(day).toLocaleDateString('pt-BR', labelsOptions)}
        </button>
      ))}
    </div>
  )
}
