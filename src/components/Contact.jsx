import { motion } from 'framer-motion'

export default function Contact() {
  return (
    <section id="contact" className="relative py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl font-bold text-white">Let’s build something</h2>
            <p className="mt-4 text-blue-100/90">I’m open to freelance work, collaborations, and full-time roles. Tell me about your project and we’ll make it real.</p>

            <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-6">
              <div className="text-sm text-blue-200/80">Email</div>
              <a href="mailto:you@example.com" className="text-white font-medium transition-colors hover:text-white/90 hover:underline">you@example.com</a>
              <div className="mt-4 text-sm text-blue-200/80">Location</div>
              <div className="text-white font-medium">Remote / Worldwide</div>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            onSubmit={(e) => e.preventDefault()}
            className="rounded-2xl border border-white/10 bg-white/5 p-6"
          >
            <div className="grid gap-4">
              <div>
                <label className="text-sm text-blue-200/80">Name</label>
                <input className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/50 hover:border-white/20 hover:bg-slate-900/70" placeholder="Your name" />
              </div>
              <div>
                <label className="text-sm text-blue-200/80">Email</label>
                <input type="email" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/50 hover:border-white/20 hover:bg-slate-900/70" placeholder="you@example.com" />
              </div>
              <div>
                <label className="text-sm text-blue-200/80">Message</label>
                <textarea rows="5" className="mt-1 w-full rounded-xl border border-white/10 bg-slate-900/60 px-3 py-2 text-white outline-none transition-all focus:ring-2 focus:ring-blue-500/50 hover:border-white/20 hover:bg-slate-900/70" placeholder="Tell me about your project..." />
              </div>
            </div>
            <button className="mt-4 inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium transition-all hover:bg-white/90 hover:shadow-[0_12px_40px_rgba(59,130,246,0.35)] hover:-translate-y-0.5">Send message</button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
