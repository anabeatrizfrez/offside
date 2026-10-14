import { formatRelativeTime } from '@/utils/timeUtils.js'

export default function NewsListItem({ title, summary, image, link, competitionName, publishedAt, reversed }) {
  return (
    <a href={link} target="_blank" rel="noreferrer" className={`flex gap-4 border-b border-gray-200 py-4 ${reversed ? 'flex-row-reverse' : ''}`}>
      {image && <img src={image} alt="" className="h-32 w-50 shrink-0 object-cover" />}

      <div className={`flex flex-col justify-between ${reversed ? 'text-right' : ''}`}>
        <div className="flex flex-col gap-2">
          <span className="text-[11px] font-bold uppercase">{competitionName}</span>
          <h3 className="text-lg leading-snug">{title}</h3>
          <p className="line-clamp-2 text-sm text-gray-500">{summary}</p>
        </div>
        <span className="text-xs text-gray-400">{formatRelativeTime(publishedAt)}</span>
      </div>
    </a>
  )
}