import { motion } from 'framer-motion'
import { CheckCircle2, Zap } from 'lucide-react'
import { projects } from '../data'
import SectionWrapper from './SectionWrapper'

export default function Projects() {
  return (
    <SectionWrapper id="projects">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Featured Projects</h2>
        <p className="section-sub">Things I've built that I'm proud of</p>
      </div>

      <div className="flex flex-col gap-8">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className="card overflow-hidden hover:shadow-2xl transition-all duration-400 group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            {/* Colored top bar */}
            <div className="h-1.5" style={{ background: `linear-gradient(90deg, ${p.color}, var(--accent2))` }} />

            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                {/* Left: title + tech + impact */}
                <div className="flex-1">
                  <h3 className="font-bold text-xl mb-3 group-hover:opacity-80 transition-opacity" style={{ color: 'var(--text)' }}>
                    {p.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {p.tech.map(t => (
                      <span key={t} className="text-xs px-2.5 py-1 rounded-full font-medium"
                        style={{
                          background: `color-mix(in srgb, ${p.color} 15%, transparent)`,
                          color: p.color,
                          border: `1px solid color-mix(in srgb, ${p.color} 30%, transparent)`,
                        }}>
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-start gap-2 p-3 rounded-xl"
                    style={{ background: 'color-mix(in srgb, var(--accent) 8%, transparent)' }}>
                    <Zap size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                    <p className="text-xs leading-5" style={{ color: 'var(--text-muted)' }}>{p.impact}</p>
                  </div>
                </div>

                {/* Right: features */}
                <div className="md:w-56 lg:w-64">
                  <p className="text-xs uppercase tracking-wider font-bold mb-3" style={{ color: 'var(--text-muted)' }}>Features</p>
                  <ul className="flex flex-col gap-1.5">
                    {p.features.map(f => (
                      <li key={f} className="flex items-start gap-2 text-xs" style={{ color: 'var(--text-muted)' }}>
                        <CheckCircle2 size={12} className="mt-0.5 flex-shrink-0" style={{ color: p.color }} />
                        {f}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
