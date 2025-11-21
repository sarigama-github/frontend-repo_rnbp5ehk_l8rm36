import { motion } from 'framer-motion'
import { Github, ExternalLink } from 'lucide-react'

const projects = [
  {
    title: 'Interactive 3D Landing',
    desc: 'Playful hero section with Spline and smooth scroll interactions.',
    tags: ['React', 'Spline', 'Tailwind'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Real-time Dashboard',
    desc: 'Live metrics with motion and themeable widgets.',
    tags: ['React', 'Framer Motion', 'REST'],
    link: '#',
    repo: '#',
  },
  {
    title: 'Content Platform',
    desc: 'Markdown authoring with fast search and instant preview.',
    tags: ['FastAPI', 'MongoDB', 'React'],
    link: '#',
    repo: '#',
  },
]

function setGlowVars(e) {
  const card = e.currentTarget
  const rect = card.getBoundingClientRect()
  const x = ((e.clientX - rect.left) / rect.width) * 100
  const y = ((e.clientY - rect.top) / rect.height) * 100
  card.style.setProperty('--x', `${x}%`)
  card.style.setProperty('--y', `${y}%`)
}

function resetGlowVars(e) {
  const card = e.currentTarget
  card.style.removeProperty('--x')
  card.style.removeProperty('--y')
}

export default function Projects() {
  return (
    <section id="projects" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-6">
          <h2 className="text-3xl font-bold text-white">Selected work</h2>
          <a href="#" className="hidden sm:inline-flex rounded-xl border border-white/10 bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15">View all</a>
        </div>

        <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.05 }}
              onMouseMove={setGlowVars}
              onMouseLeave={resetGlowVars}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 transition-all duration-500 hover:-translate-y-1 hover:shadow-[0_20px_60px_rgba(59,130,246,0.15)]"
            >
              <div className="relative h-40 overflow-hidden rounded-xl">
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30 transition-all duration-500 group-hover:scale-105 group-hover:contrast-125 group-hover:saturate-125" />
                {/* radial glow that follows the cursor using CSS vars --x/--y */}
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100 bg-[radial-gradient(600px_200px_at_var(--x,50%)_var(--y,50%),rgba(255,255,255,0.25),transparent_60%)]" />
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-blue-100/90">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-blue-100/80">
                  <a href={p.repo} className="transition-transform hover:text-white hover:scale-110"><Github size={18} /></a>
                  <a href={p.link} className="transition-transform hover:text-white hover:scale-110"><ExternalLink size={18} /></a>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1 text-xs text-blue-200/80 transition-all hover:border-white/20 hover:bg-slate-900/70 hover:text-white/90 hover:saturate-150">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
