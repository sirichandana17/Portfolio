import { motion } from 'framer-motion'
import { Download, Mail } from 'lucide-react'
import { personal } from '../data'
import { useTypingEffect } from '../hooks/useTypingEffect'

const codeLines = [
  { txt: 'import AI from "future"', w: 72 },
  { txt: 'const skills = [ML, NLP, RAG]', w: 88 },
  { txt: 'function solve(problem) {', w: 76 },
  { txt: '  return innovation()', w: 60 },
  { txt: '}', w: 16 },
  { txt: 'train(model, data)', w: 64 },
]

export default function Hero() {
  const typed = useTypingEffect(personal.roles)

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center relative overflow-hidden"
      style={{ background: 'var(--bg)' }}
    >
      {/* Background blobs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent), transparent)' }} />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full opacity-10 blur-3xl pointer-events-none"
        style={{ background: 'radial-gradient(circle, var(--accent2), transparent)' }} />

      <div className="section-pad w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-16">

          {/* Text */}
          <motion.div
            className="flex-1 text-center md:text-left"
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <motion.p
              className="text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ color: 'var(--accent)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Welcome to my portfolio
            </motion.p>

            <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4">
              Hi, I'm <span className="gradient-text">Siri Chandana</span>
              <br />
              <span style={{ color: 'var(--text)' }}>Kanaparthi</span>
            </h1>

            <div className="text-xl md:text-2xl font-semibold h-8 mb-6" style={{ color: 'var(--accent)' }}>
              {typed}<span className="animate-pulse">|</span>
            </div>

            <p className="text-base leading-relaxed max-w-xl mb-8" style={{ color: 'var(--text-muted)' }}>
              B.Tech CSE (AI & ML) student building intelligent systems and scalable web applications.
              Turning ideas into reality with code.
            </p>

            <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-8">
              <a href="/resume.pdf" download target="_blank" rel="noopener noreferrer" className="btn-primary">
                <Download size={16} /> Download Resume
              </a>
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="btn-outline">
                <Mail size={16} /> Contact Me
              </button>
            </div>

            {/* Labeled social links */}
            <div className="flex flex-wrap gap-3 justify-center md:justify-start">
              {[
                { href: personal.github, label: 'GitHub' },
                { href: personal.linkedin, label: 'LinkedIn' },
                { href: personal.leetcode, label: 'LeetCode' },
              ].map(({ href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold px-4 py-2 rounded-full transition-all duration-200 hover:scale-105"
                  style={{
                    background: 'color-mix(in srgb, var(--accent) 12%, transparent)',
                    border: '1px solid color-mix(in srgb, var(--accent) 30%, transparent)',
                    color: 'var(--accent)',
                  }}
                >
                  {label} ↗
                </a>
              ))}
            </div>
          </motion.div>

          {/* Animated laptop */}
          <motion.div
            className="flex-shrink-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
              className="relative"
            >
              {/* Glow behind laptop */}
              <div className="absolute inset-0 blur-3xl opacity-20 rounded-full scale-75"
                style={{ background: 'linear-gradient(135deg, var(--accent), var(--accent2))' }} />

              <svg width="320" height="240" viewBox="0 0 320 240" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Laptop lid / screen */}
                <rect x="40" y="20" width="240" height="160" rx="12" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="2" />
                {/* Screen bezel */}
                <rect x="52" y="32" width="216" height="136" rx="6" fill="var(--bg)" />

                {/* Screen glow */}
                <rect x="52" y="32" width="216" height="136" rx="6"
                  fill="url(#screenGlow)" opacity="0.06" />

                {/* Code lines on screen */}
                {codeLines.map((line, i) => (
                  <motion.g key={i}>
                    {/* Line number */}
                    <text x="64" y={54 + i * 18} fontSize="7" fill="var(--text-muted)" opacity="0.4" fontFamily="monospace">
                      {i + 1}
                    </text>
                    {/* Code bar */}
                    <motion.rect
                      x="78" y={46 + i * 18}
                      width={line.w} height="8" rx="3"
                      fill={i % 2 === 0 ? 'var(--accent)' : 'var(--accent2)'}
                      opacity="0.7"
                      initial={{ width: 0 }}
                      animate={{ width: line.w }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.5, ease: 'easeOut' }}
                    />
                    {/* Inline dim detail */}
                    <motion.rect
                      x={82 + line.w} y={46 + i * 18}
                      width={20} height="8" rx="3"
                      fill="var(--text-muted)"
                      opacity="0.2"
                      initial={{ width: 0 }}
                      animate={{ width: 20 }}
                      transition={{ delay: 1 + i * 0.15, duration: 0.3 }}
                    />
                  </motion.g>
                ))}

                {/* Blinking cursor */}
                <motion.rect
                  x="78" y="154" width="6" height="9" rx="1"
                  fill="var(--accent)"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ repeat: Infinity, duration: 1 }}
                />

                {/* Camera dot */}
                <circle cx="160" cy="28" r="2.5" fill="var(--border)" />

                {/* Laptop base */}
                <rect x="20" y="180" width="280" height="14" rx="4" fill="var(--bg-card)" stroke="var(--border)" strokeWidth="2" />
                {/* Trackpad */}
                <rect x="125" y="185" width="70" height="6" rx="3" fill="var(--border)" opacity="0.6" />
                {/* Bottom foot shadow */}
                <ellipse cx="160" cy="200" rx="130" ry="6" fill="var(--accent)" opacity="0.06" />

                <defs>
                  <radialGradient id="screenGlow" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="var(--accent)" />
                    <stop offset="100%" stopColor="transparent" />
                  </radialGradient>
                </defs>
              </svg>

              {/* Floating chips around laptop */}
              {[
                { label: '🤖 AI', top: '-12px', left: '10px', delay: 0 },
                { label: '⚛️ React', top: '10px', right: '-10px', delay: 0.4 },
                { label: '🐍 Python', bottom: '30px', left: '-10px', delay: 0.8 },
                { label: '☕ Java', bottom: '10px', right: '10px', delay: 1.2 },
              ].map(({ label, delay, ...pos }) => (
                <motion.div
                  key={label}
                  className="absolute glass text-xs font-bold px-3 py-1.5 rounded-full"
                  style={{ ...pos, color: 'var(--accent)' }}
                  animate={{ y: [0, -5, 0] }}
                  transition={{ repeat: Infinity, duration: 2.5 + delay, delay, ease: 'easeInOut' }}
                >
                  {label}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-16"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.8 }}
        >
          <div className="w-6 h-10 rounded-full border-2 flex items-start justify-center pt-1.5"
            style={{ borderColor: 'var(--accent)' }}>
            <div className="w-1.5 h-3 rounded-full" style={{ background: 'var(--accent)' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
