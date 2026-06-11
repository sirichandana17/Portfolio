import { motion } from 'framer-motion'
import { Brain, Code, Cpu, Trophy } from 'lucide-react'
import { about } from '../data'
import SectionWrapper from './SectionWrapper'

const highlights = [
  { icon: <Brain size={22} />, label: 'AI & ML', desc: 'NLP, RAG, Vector DBs' },
  { icon: <Code size={22} />, label: 'Full-Stack', desc: 'React, Spring Boot' },
  { icon: <Cpu size={22} />, label: 'Problem Solver', desc: '350+ LeetCode' },
  { icon: <Trophy size={22} />, label: 'CGPA 9.06', desc: 'B.Tech CSE AI&ML' },
]

export default function About() {
  return (
    <SectionWrapper id="about">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">About Me</h2>
        <p className="section-sub">A little bit about who I am</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-base leading-8" style={{ color: 'var(--text-muted)' }}>{about}</p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {highlights.map((h, i) => (
            <motion.div
              key={h.label}
              className="card p-5 flex flex-col gap-2 hover:scale-105 transition-transform duration-300"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-1"
                style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}>
                {h.icon}
              </div>
              <p className="font-bold text-sm" style={{ color: 'var(--text)' }}>{h.label}</p>
              <p className="text-xs" style={{ color: 'var(--text-muted)' }}>{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}
