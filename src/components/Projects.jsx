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
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5"
            >
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/30 to-cyan-500/30"></div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-white">{p.title}</h3>
                  <p className="mt-1 text-sm text-blue-100/90">{p.desc}</p>
                </div>
                <div className="flex items-center gap-2 text-blue-100/80">
                  <a href={p.repo} className="hover:text-white"><Github size={18} /></a>
                  <a href={p.link} className="hover:text-white"><ExternalLink size={18} /></a>
                </div>
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-lg border border-white/10 bg-slate-900/60 px-2 py-1 text-xs text-blue-200/80">{t}</span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
