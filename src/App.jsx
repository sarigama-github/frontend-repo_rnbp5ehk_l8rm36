import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-blue-100">
      <div className="absolute inset-0 -z-0 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.08),transparent_60%),radial-gradient(ellipse_at_bottom,rgba(99,102,241,0.08),transparent_60%)]" />

      <Navbar />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />

        <footer className="py-10 text-center text-sm text-blue-200/70">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </footer>
      </main>
    </div>
  )
}

export default App
