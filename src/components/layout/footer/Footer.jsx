import { Link } from 'react-router-dom'

import Logo from '@/assets/brand/logo.svg?react'

import FooterCard from './FooterCard.jsx'
import { footerSections } from './footerData.js'

export default function Footer() {
  return (
    <footer className="footer bg-bg-secondary mt-16">
      <div className="container-app p-4">
        <div className="flex justify-between">
          <div className="flex flex-col justify-center flex-wrap gap-4">
            <Link to="/" className="flex items-center gap-2">
              <Logo className="w-12 text-bg-primary" />
              <p className="text-text-primary text-4xl font-bold">Offside</p>
            </Link>
          </div>

          {footerSections.map((section) => (
            <FooterCard
              key={section.title}
              title={section.title}
              links={section.links}
            />
          ))}
        </div>

        <div className="mt-4 border-t border-text-primary/20 pt-4">
          <p className="text-text-secondary text-xs">
            © {new Date().getFullYear()} <strong className="font-semibold">Offside</strong>. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}