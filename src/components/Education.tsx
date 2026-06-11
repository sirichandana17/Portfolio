import { motion } from 'framer-motion'
import { GraduationCap } from 'lucide-react'
import { education } from '../data'
import SectionWrapper from './SectionWrapper'

export default function Education() {
  return (
    <SectionWrapper id="education">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Education</h2>
        <p className="section-sub">My academic journey</p>
      </div>

      <div className="relative max-w-2xl mx-auto">
        {/* Timeline line */}
        <div className="absolute left-6 top-0 bottom-0 w-0.5" style={{ background: 'var(--border)' }} />

        <div className="flex flex-col gap-8">
          {education.map((ed, i) => (
            <motion.div
              key={ed.institution}
              className="flex gap-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
            >
              {/* Dot */}
              <div className="relative z-10 flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center shadow-lg"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: 'white' }}>
                <GraduationCap size={20} />
              </div>

              <div className="card p-6 flex-1">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                  <h3 className="font-bold text-base" style={{ color: 'var(--text)' }}>{ed.institution}</h3>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full"
                    style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}>
                    {ed.period}
                  </span>
                </div>
                <p className="text-sm font-medium mb-1" style={{ color: 'var(--text-muted)' }}>{ed.degree}</p>
                <p className="text-sm font-bold gradient-text">{ed.score}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
