import { motion } from 'framer-motion'
import { Trophy, Star } from 'lucide-react'
import { achievements } from '../data'
import SectionWrapper from './SectionWrapper'

const icons = [<Trophy size={20} />, <Star size={20} />, <Star size={20} />]

export default function Achievements() {
  return (
    <SectionWrapper id="achievements">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Achievements</h2>
        <p className="section-sub">Milestones I'm proud of</p>
      </div>

      <div className="max-w-3xl mx-auto grid sm:grid-cols-3 gap-5">
        {achievements.map((a, i) => (
          <motion.div
            key={a}
            className="card p-6 text-center hover:scale-105 transition-transform duration-300"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4"
              style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))', color: 'white' }}>
              {icons[i]}
            </div>
            <p className="text-sm font-medium leading-6" style={{ color: 'var(--text)' }}>{a}</p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
