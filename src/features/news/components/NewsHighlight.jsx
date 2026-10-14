import { formatRelativeTime } from '@/utils/timeUtils.js'

export default function NewsHighlight({ title, summary, image, link, competitionName, publishedAt }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex flex-col gap-3">
      <img src={image} alt={title} className="aspect-video w-full object-cover" />

      <span className="text-[11px] font-bold uppercase">{competitionName}</span>
      <h3 className="text-4xl font-extrabold leading-tight">{title}</h3>
      <p className="text-gray-500">{summary}</p>
      <span className="text-xs text-gray-400">{formatRelativeTime(publishedAt)}</span>
    </a>
  )
}