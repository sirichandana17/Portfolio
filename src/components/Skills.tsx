import { motion } from 'framer-motion'
import { skills } from '../data'
import SectionWrapper from './SectionWrapper'

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Skills</h2>
        <p className="section-sub">Technologies and tools I work with</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="card p-6 hover:scale-[1.02] transition-transform duration-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <h3 className="font-bold text-sm uppercase tracking-wider mb-4" style={{ color: 'var(--accent)' }}>
              {group.category}
            </h3>
            <div className="flex flex-wrap gap-2">
              {group.items.map(item => (
                <span key={item} className="skill-badge">{item}</span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
