import { Link } from 'react-router-dom'

import Logo from '@/assets/brand/logo.svg?react'
import { ExpandableSearch } from '@/components/ui/ExpandableSearch.jsx'
import { navItems } from '@/data/navItems.js'

export default function Header() {
  return (
    <header className="header bg-bg-primary mb-8">
      <div className="container-app flex justify-between p-4 items-center">
        <Link to="/" className="flex items-center gap-2">
          <Logo className="w-8 text-bg-secondary" />
          <h1>Offside</h1>
        </Link>

        <nav>
          <ul className="flex gap-4">
            <li><Link to="/">Início</Link></li>
            {navItems.map((item) => (
              <li key={item}><a href="#">{item}</a></li>
            ))}
          </ul>
        </nav>

        <div className="bg-white rounded-full">
          <ExpandableSearch placeholder="Buscar times, competições..." />
        </div>
      </div>
    </header>
  )
}
