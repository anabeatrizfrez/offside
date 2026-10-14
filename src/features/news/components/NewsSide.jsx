import { formatRelativeTime } from '@/utils/timeUtils.js'

export default function NewsSide({ title, image, link, competitionName, publishedAt }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className="flex flex-col gap-2">
      <img src={image} alt={title} className="aspect-video w-full object-cover" />

      <span className="text-[11px] font-bold uppercase">{competitionName}</span>
      <h3 className="text-xl font-bold leading-snug">{title}</h3>
      <span className="text-xs text-gray-400">{formatRelativeTime(publishedAt)}</span>
    </a>
  )
}