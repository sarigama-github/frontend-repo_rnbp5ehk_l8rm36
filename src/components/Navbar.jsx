import { useState } from 'react'
import { Menu, X, Github, Linkedin, Mail } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-slate-900/60 backdrop-blur supports-[backdrop-filter]:bg-slate-900/50">
          <div className="flex items-center justify-between px-6 py-4">
            <a href="#" className="group inline-flex items-center gap-3">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30 transition-transform duration-300 group-hover:rotate-6 group-hover:scale-105" />
              <span className="text-white/90 text-lg font-semibold tracking-tight transition-colors group-hover:text-white">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="relative text-sm text-blue-100/80 transition-all hover:text-white after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-gradient-to-r after:from-cyan-400 after:to-indigo-500 after:transition-all after:duration-300 hover:after:w-full"
                >
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-100/80 transition-transform hover:text-white hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.45)]"
                >
                  <Github size={18} />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="text-blue-100/80 transition-transform hover:text-white hover:scale-110 hover:drop-shadow-[0_0_20px_rgba(99,102,241,0.45)]"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm text-white transition-all hover:bg-white/15 hover:saturate-150 hover:backdrop-blur-md hover:shadow-[0_8px_30px_rgba(59,130,246,0.25)]"
                >
                  <Mail size={16} /> Say hi
                </a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white transition-colors hover:bg-white/15">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-4">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-blue-100/90 transition-colors hover:text-white">
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-100/80 transition-transform hover:scale-110"><Github size={18} /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-100/80 transition-transform hover:scale-110"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
