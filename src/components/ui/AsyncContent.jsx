export default function AsyncContent({
  loading,
  error,
  isEmpty,
  loadingText = 'Carregando...',
  errorText = 'Algo deu errado.',
  emptyText = 'Nada por aqui.',
  children,
}) {
  if (loading) return <p className="text-sm text-gray-500">{loadingText}</p>
  if (error) return <p className="text-sm text-red-600">{errorText}</p>
  if (isEmpty) return <p className="text-sm text-gray-500">{emptyText}</p>

  return children
}
