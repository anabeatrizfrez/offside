import NewsHighlight from './NewsHighlight.jsx'
import NewsSide from './NewsSide.jsx'

export default function NewsFeatured({ articles }) {
  const [main, ...side] = articles

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
      {main && (
        <div className="md:col-span-2">
          <NewsHighlight {...main} />
        </div>
      )}

      <div className="flex flex-col gap-6 md:border-l md:border-gray-200 md:pl-6">
        {side.map((article) => (
          <NewsSide key={article.id} {...article} />
        ))}
      </div>
    </div>
  )
}