import { useState, useEffect } from 'react'
import { Moon, Sun, Menu, X } from 'lucide-react'

const links = ['About', 'Education', 'Skills', 'Projects', 'Experience', 'Profiles', 'Contact']

export default function Navbar({ dark, toggle }: { dark: boolean; toggle: () => void }) {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'color-mix(in srgb, var(--bg-card) 90%, transparent)' : 'transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--border)' : 'none',
      }}
    >
      <div className="max-w-6xl mx-auto px-4 md:px-8 flex items-center justify-between h-16">
        <span className="gradient-text font-bold text-lg tracking-tight">SC</span>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-6">
          {links.map(l => (
            <li key={l}>
              <button
                onClick={() => scrollTo(l)}
                className="text-sm font-medium transition-all duration-200 hover:opacity-60"
                style={{ color: 'var(--text)' }}
              >
                {l}
              </button>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-3">
          <button
            onClick={toggle}
            className="p-2 rounded-full transition-all duration-200 hover:opacity-70"
            style={{ background: 'var(--bg-card)', border: '1px solid var(--border)' }}
            aria-label="Toggle theme"
          >
            {dark ? <Sun size={16} /> : <Moon size={16} />}
          </button>
          <button
            className="md:hidden p-2"
            onClick={() => setOpen(o => !o)}
            aria-label="Menu"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden glass px-4 pb-4">
          {links.map(l => (
            <button
              key={l}
              onClick={() => scrollTo(l)}
              className="block w-full text-left py-2.5 text-sm font-medium border-b"
              style={{ color: 'var(--text)', borderColor: 'var(--border)' }}
            >
              {l}
            </button>
          ))}
        </div>
      )}
    </nav>
  )
}
