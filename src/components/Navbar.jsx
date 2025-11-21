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
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 shadow-lg shadow-blue-500/30"></div>
              <span className="text-white/90 text-lg font-semibold tracking-tight group-hover:text-white transition-colors">My Portfolio</span>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {navItems.map((item) => (
                <a key={item.href} href={item.href} className="text-sm text-blue-100/80 hover:text-white transition-colors">
                  {item.label}
                </a>
              ))}
              <div className="h-6 w-px bg-white/10" />
              <div className="flex items-center gap-4">
                <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition-colors"><Github size={18} /></a>
                <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-100/80 hover:text-white transition-colors"><Linkedin size={18} /></a>
                <a href="#contact" className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-3 py-1.5 text-sm text-white hover:bg-white/15 transition-colors"><Mail size={16} /> Say hi</a>
              </div>
            </nav>

            <button onClick={() => setOpen(!open)} className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 text-white">
              {open ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {open && (
            <div className="md:hidden border-t border-white/10 px-6 pb-4">
              <div className="flex flex-col py-2">
                {navItems.map((item) => (
                  <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="py-2 text-sm text-blue-100/90">
                    {item.label}
                  </a>
                ))}
                <div className="mt-2 flex items-center gap-4">
                  <a href="https://github.com" target="_blank" rel="noreferrer" className="text-blue-100/80"><Github size={18} /></a>
                  <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="text-blue-100/80"><Linkedin size={18} /></a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
