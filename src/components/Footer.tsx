import { personal } from '../data'
import { Globe, Code2, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="py-10 px-4 text-center" style={{ borderTop: '1px solid var(--border)' }}>
      <p className="font-bold text-base gradient-text mb-1">{personal.name}</p>
      <p className="text-xs mb-4" style={{ color: 'var(--text-muted)' }}>AI & ML Enthusiast · Full-Stack Developer · Problem Solver</p>
      <div className="flex justify-center gap-4 mb-4">
        {[
          { href: personal.github, icon: <Globe size={16} /> },
          { href: personal.linkedin, icon: <Globe size={16} /> },
          { href: personal.leetcode, icon: <Code2 size={16} /> },
          { href: `mailto:${personal.email}`, icon: <Mail size={16} /> },
        ].map(({ href, icon }, i) => (
          <a
            key={i}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:opacity-70 transition-opacity"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)', color: 'var(--text)' }}
          >
            {icon}
          </a>
        ))}
      </div>
      <p className="text-xs" style={{ color: 'var(--text-muted)' }}>
        © {new Date().getFullYear()} Siri Chandana Kanaparthi · Built with React & ❤️
      </p>
    </footer>
  )
}
