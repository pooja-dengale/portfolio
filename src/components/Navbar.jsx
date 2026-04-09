import { useState, useEffect } from 'react'

const links = ['Home', 'About', 'Skills', 'Projects', 'Experience', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50)

      // Highlight active section
      const sections = document.querySelectorAll('section[id]')
      const pos = window.scrollY + 100
      sections.forEach((sec) => {
        if (pos >= sec.offsetTop && pos < sec.offsetTop + sec.offsetHeight) {
          setActive(sec.id)
        }
      })
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300
        ${scrolled
          ? 'bg-slate-950/95 shadow-lg shadow-black/30'
          : 'bg-slate-950/80 backdrop-blur-xl'
        } border-b border-cyan-400/10`}
    >
      <div className="max-w-6xl mx-auto px-5 py-5 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold flex items-center gap-1">
          <span className="text-cyan-400 text-3xl">&lt;</span>
          <span className="text-white">PD</span>
          <span className="text-cyan-400 text-3xl">/&gt;</span>
        </div>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-10">
          {links.map((link) => {
            const id = link.toLowerCase()
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`relative font-medium transition-colors duration-300 pb-1
                    ${active === id ? 'text-cyan-400' : 'text-slate-300 hover:text-cyan-400'}
                    after:absolute after:bottom-0 after:left-0 after:h-0.5 after:rounded
                    after:bg-gradient-to-r after:from-cyan-400 after:to-cyan-500
                    after:transition-all after:duration-300
                    ${active === id ? 'after:w-full' : 'after:w-0 hover:after:w-full'}`}
                >
                  {link}
                </button>
              </li>
            )
          })}
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-cyan-400 transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden transition-all duration-300 overflow-hidden ${menuOpen ? 'max-h-96' : 'max-h-0'}`}>
        <ul className="flex flex-col gap-4 px-6 pb-6 bg-slate-950/98 border-t border-cyan-400/10">
          {links.map((link) => {
            const id = link.toLowerCase()
            return (
              <li key={id}>
                <button
                  onClick={() => scrollTo(id)}
                  className={`font-medium transition-colors duration-300 ${active === id ? 'text-cyan-400' : 'text-slate-300'}`}
                >
                  {link}
                </button>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  )
}
