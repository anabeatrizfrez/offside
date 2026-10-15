import AsyncContent from '@/components/ui/AsyncContent.jsx'

import { useTopNews } from '../hooks/useTopNews.js'
import NewsFeatured from './NewsFeatured.jsx'
import NewsList from './NewsList.jsx'

export default function NewsSection({ aside }) {
  const { data, loading, error } = useTopNews({ limit: 4 })
  const { featured = [], rest = [] } = data ?? {}

  return (
    <section className="flex flex-col gap-8 border-t border-black pt-4">
      <h2 className="text-2xl font-bold">Últimas notícias</h2>

      <AsyncContent
        loading={loading}
        error={error}
        isEmpty={!featured.length && !rest.length}
        loadingText="Carregando notícias..."
        errorText="Erro ao carregar as notícias."
        emptyText="Nenhuma notícia disponível."
      >
        <NewsFeatured articles={featured} />
      </AsyncContent>

      <div className="grid grid-cols-1 gap-8 border-t border-gray-200 pt-8 md:grid-cols-5">
        <div className={aside ? 'md:col-span-3' : 'md:col-span-5'}>
          <NewsList articles={rest} />
        </div>

        {aside && <aside className="md:col-span-2">{aside}</aside>}
      </div>
    </section>
  )
}