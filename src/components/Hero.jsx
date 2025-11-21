import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative pt-28 pb-24 overflow-hidden">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(99,102,241,0.25),transparent_40%),radial-gradient(circle_at_80%_30%,rgba(34,211,238,0.25),transparent_35%),radial-gradient(circle_at_50%_80%,rgba(59,130,246,0.25),transparent_35%)]" />
      </div>

      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        {/* gradient glass overlay that subtly reacts on hover */}
        <div className="pointer-events-none absolute inset-0 transition duration-500 group/hero hover:opacity-90" />
      </div>

      <div className="relative z-10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-5xl sm:text-6xl font-bold tracking-tight text-white drop-shadow-2xl"
            >
              Creative Developer
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="mt-4 max-w-xl text-lg text-blue-100/90"
            >
              I design and build playful, interactive web experiences with modern tooling and a focus on delightful details.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="mt-8 flex items-center gap-4"
            >
              <a href="#projects" className="inline-flex items-center rounded-xl bg-white text-slate-900 px-5 py-3 text-sm font-medium transition-all hover:bg-white/90 hover:saturate-150 hover:shadow-[0_12px_40px_rgba(59,130,246,0.35)] hover:-translate-y-0.5">
                See my work
              </a>
              <a href="#contact" className="inline-flex items-center rounded-xl bg-white/10 text-white px-5 py-3 text-sm font-medium transition-all border border-white/10 hover:bg-white/15 hover:backdrop-blur-md hover:saturate-150 hover:shadow-[0_8px_30px_rgba(34,211,238,0.25)] hover:-translate-y-0.5">
                Get in touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
