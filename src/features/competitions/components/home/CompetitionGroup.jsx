import CompetitionRow from './CompetitionRow.jsx'

export default function CompetitionGroup({ title, competitions }) {
  return (
    <section className="flex flex-col">
      <h3 className="mb-1 text-[11px] font-bold uppercase text-gray-500">{title}</h3>

      {competitions.map((competition) => (
        <CompetitionRow key={competition.slug} {...competition} />
      ))}
    </section>
  )
}