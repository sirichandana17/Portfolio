import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Globe, Code2, Send, CheckCircle } from 'lucide-react'
import { personal } from '../data'
import SectionWrapper from './SectionWrapper'

const socials = [
  { label: 'Email', value: personal.email, href: `mailto:${personal.email}`, icon: <Mail size={18} /> },
  { label: 'LinkedIn', value: 'siri-chandana-586958330', href: personal.linkedin, icon: <Globe size={18} /> },
  { label: 'GitHub', value: 'sirichandana17', href: personal.github, icon: <Globe size={18} /> },
  { label: 'LeetCode', value: 'sirichandana17', href: personal.leetcode, icon: <Code2 size={18} /> },
]

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const { name, email, message } = form
    const mailto = `mailto:${personal.email}?subject=Portfolio Contact from ${name}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)}`
    window.location.href = mailto
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inputStyle = {
    background: 'var(--bg)',
    border: '1px solid var(--border)',
    color: 'var(--text)',
    borderRadius: '10px',
    padding: '10px 14px',
    width: '100%',
    fontSize: '14px',
    outline: 'none',
  } as React.CSSProperties

  return (
    <SectionWrapper id="contact">
      <div className="text-center mb-10">
        <h2 className="section-title gradient-text">Get In Touch</h2>
        <p className="section-sub">Have a project or opportunity? Let's talk!</p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          className="card p-6 flex flex-col gap-4"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg mb-1" style={{ color: 'var(--text)' }}>Send a Message</h3>
          <input
            required
            name="name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            style={inputStyle}
          />
          <input
            required
            type="email"
            name="email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            style={inputStyle}
          />
          <textarea
            required
            name="message"
            placeholder="Your Message"
            rows={4}
            value={form.message}
            onChange={handleChange}
            style={{ ...inputStyle, resize: 'vertical' }}
          />
          <button type="submit" className="btn-primary justify-center">
            {sent ? <><CheckCircle size={16} /> Sent!</> : <><Send size={16} /> Send Message</>}
          </button>
        </motion.form>

        {/* Socials */}
        <motion.div
          className="flex flex-col gap-4"
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h3 className="font-bold text-lg" style={{ color: 'var(--text)' }}>Connect With Me</h3>
          <p className="text-sm leading-6 mb-2" style={{ color: 'var(--text-muted)' }}>
            I'm always open to interesting conversations, collaborations, and new opportunities.
            Feel free to reach out!
          </p>
          {socials.map(s => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="card px-5 py-4 flex items-center gap-4 hover:scale-[1.02] transition-transform duration-300 group"
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: 'color-mix(in srgb, var(--accent) 15%, transparent)', color: 'var(--accent)' }}>
                {s.icon}
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide" style={{ color: 'var(--accent)' }}>{s.label}</p>
                <p className="text-sm truncate" style={{ color: 'var(--text-muted)' }}>{s.value}</p>
              </div>
            </a>
          ))}
        </motion.div>
      </div>
    </SectionWrapper>
  )
}
