import { motion } from 'framer-motion'

export default function About() {
  const items = [
    { k: 'Frontend', v: 'React, Next.js, Vite, Tailwind, Framer Motion' },
    { k: 'Backend', v: 'FastAPI, Node, MongoDB' },
    { k: 'Focus', v: 'Interactive UX, performance, accessibility' },
  ]

  return (
    <section id="about" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <h2 className="text-3xl font-bold text-white">About me</h2>
            <p className="mt-4 text-blue-100/90 leading-relaxed">
              I’m a developer who loves blending code and design to craft interfaces that feel alive. I work end-to-end, from idea to production, and I’m happiest when shipping products people love to use.
            </p>

            <div className="mt-6 grid gap-4">
              {items.map((i) => (
                <div key={i.k} className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4 transition-all hover:border-white/20 hover:bg-white/10">
                  <div className="text-sm w-28 shrink-0 text-blue-200/70">{i.k}</div>
                  <div className="text-sm text-white/90">{i.v}</div>
                  <div className="ml-auto h-6 w-6 rounded-lg bg-gradient-to-br from-cyan-400/30 to-indigo-500/30 opacity-0 blur-sm transition-all group-hover:opacity-100 group-hover:blur"></div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-indigo-500/20 via-blue-500/10 to-cyan-500/20 p-1">
              <div className="rounded-[22px] bg-slate-900/70 p-8">
                <div className="grid grid-cols-2 gap-4">
                  {Array.from({ length: 6 }).map((_, idx) => (
                    <div key={idx} className="group rounded-xl border border-white/10 bg-white/5 p-4 text-sm text-white/80 transition-all hover:bg-white/10 hover:border-white/20">
                      <div className="h-24 rounded-lg bg-gradient-to-br from-blue-500/20 to-cyan-500/20 transition-all group-hover:scale-[1.02] group-hover:contrast-125" />
                      <div className="mt-3 font-medium">UI Concept {idx + 1}</div>
                      <div className="text-xs text-blue-200/70">Motion, Glass, Glow</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
