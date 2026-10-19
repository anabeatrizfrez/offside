import { Route,Routes } from 'react-router-dom'

import AllCompetitions from '@/pages/AllCompetitions.jsx'
import Competitions  from '@/pages/Competition.jsx'
import Home from '@/pages/Home.jsx'

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/competitions" element={<AllCompetitions />} />
      <Route path="/competitions/:slug" element={<Competitions />} />
    </Routes>
  )
}
