import { columns } from '../data/columns.js'

export default function StandingsTable({ rows }) {
  return (
    <table className="w-full text-sm">
      <thead>
        <tr className="bg-gray-100 text-xs text-gray-500">
          <th className="px-2 py-2 text-left font-normal">POS.</th>
          <th className="px-2 py-2 text-left font-normal">CLUBE</th>
          {columns.map((column) => (
            <th key={column.key} className="px-2 py-2 text-center font-normal">
              {column.label}
            </th>
          ))}
        </tr>
      </thead>

      <tbody>
        {rows.map((row) => (
          <tr key={row.team} className="even:bg-gray-50">
            <td className="px-2 py-2 text-gray-500">{row.rank}</td>
            <td className="px-2 py-2 font-semibold">{row.team}</td>
            {columns.map((column) => (
              <td key={column.key} className="px-2 py-2 text-center">
                {column.format ? column.format(row[column.key]) : row[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  )
}