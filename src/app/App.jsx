import { BrowserRouter } from 'react-router-dom'

import Footer from '@/components/layout/footer/Footer.jsx'
import Header from '@/components/layout/Header.jsx'

import AppRoutes from './routes.jsx'

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  )
}
