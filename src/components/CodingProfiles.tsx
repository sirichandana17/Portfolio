import { motion } from 'framer-motion'
import { Globe, Code2, ExternalLink } from 'lucide-react'
import { personal } from '../data'
import SectionWrapper from './SectionWrapper'

const profiles = [
  {
    name: 'GitHub',
    handle: 'sirichandana17',
    url: personal.github,
    icon: <Globe size={28} />,
    desc: 'Open-source projects & code repositories',
    color: '#6366f1',
    stat: 'View Repos →',
  },
  {
    name: 'LeetCode',
    handle: 'sirichandana17',
    url: personal.leetcode,
    icon: <Code2 size={28} />,
    desc: '350+ problems solved across topics',
    color: '#f59e0b',
    stat: '350+ Solved',
  },
  {
    name: 'LinkedIn',
    handle: 'siri-chandana-586958330',
    url: personal.linkedin,
    icon: <Globe size={28} />,
    desc: 'Professional network & achievements',
    color: '#0ea5e9',
    stat: 'Connect →',
  },
]

export default function CodingProfiles() {
  return (
    <SectionWrapper id="profiles">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Coding Profiles</h2>
        <p className="section-sub">Find me across the web</p>
      </div>

      <div className="grid sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {profiles.map((p, i) => (
          <motion.a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            className="card p-6 flex flex-col gap-4 hover:scale-105 hover:shadow-xl transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="w-14 h-14 rounded-2xl flex items-center justify-center"
              style={{ background: `color-mix(in srgb, ${p.color} 15%, transparent)`, color: p.color }}>
              {p.icon}
            </div>
            <div>
              <div className="flex items-center justify-between mb-1">
                <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>{p.name}</h3>
                <ExternalLink size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: p.color }} />
              </div>
              <p className="text-xs mb-2" style={{ color: 'var(--text-muted)' }}>@{p.handle}</p>
              <p className="text-sm" style={{ color: 'var(--text-muted)' }}>{p.desc}</p>
            </div>
            <span className="text-sm font-bold mt-auto" style={{ color: p.color }}>{p.stat}</span>
          </motion.a>
        ))}
      </div>
    </SectionWrapper>
  )
}
