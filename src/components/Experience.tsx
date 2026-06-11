import { motion } from 'framer-motion'
import { Briefcase, ChevronRight } from 'lucide-react'
import { experience } from '../data'
import SectionWrapper from './SectionWrapper'

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Experience</h2>
        <p className="section-sub">Where I've applied my skills</p>
      </div>

      <div className="max-w-3xl mx-auto flex flex-col gap-6">
        {experience.map((exp, i) => (
          <motion.div
            key={exp.company}
            className="card p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: 'white' }}>
                <Briefcase size={20} />
              </div>
              <div>
                <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>{exp.company}</h3>
                <p className="text-sm font-semibold" style={{ color: 'var(--accent)' }}>{exp.role}</p>
              </div>
            </div>
            <ul className="grid sm:grid-cols-2 gap-2">
              {exp.responsibilities.map(r => (
                <li key={r} className="flex items-start gap-2 text-sm" style={{ color: 'var(--text-muted)' }}>
                  <ChevronRight size={14} className="mt-0.5 flex-shrink-0" style={{ color: 'var(--accent)' }} />
                  {r}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
