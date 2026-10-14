import { BrowserRouter } from 'react-router-dom'

import Header from '@/components/layout/Header.jsx'

import AppRoutes from './routes.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
    </BrowserRouter>
  )
}
