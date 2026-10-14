import { Route,Routes } from 'react-router-dom'

import Championship from '@/pages/Championship.jsx'
import Home from '@/pages/Home.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/championship/:slug" element={<Championship />} />
    </Routes>
  )
}
