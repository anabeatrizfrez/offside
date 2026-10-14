import NewsListItem from './NewsListItem.jsx'

export default function NewsList({ articles }) {
  return (
    <div className="flex flex-col">
      {articles.map((article, index) => (
        <NewsListItem
          key={article.id}
          {...article}
          reversed={index % 2 !== 0}
        />
      ))}
    </div>
  )
}