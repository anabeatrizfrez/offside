import { Link } from 'react-router-dom'

export default function FooterCard({ title, links }) {
  return (
    <div className="flex flex-col justify-between">
      <p className="text-bg-primary font-bold mb-2">{title}</p>
      
      {links.map((link) => (
        <Link 
          key={link.label} 
          to={link.to || link.href} 
          className="flex items-center gap-2 py-1"
        >
          <p className="text-text-secondary hover:text-text-primary"> {link.label} </p>
        </Link>
      ))}
    </div>
  )
}
