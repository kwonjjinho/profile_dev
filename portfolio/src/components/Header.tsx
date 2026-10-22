import { useState, useEffect } from 'react'

const navItems = [
  { id: 'card-hero', label: '01 CARD' },
  { id: 'resume', label: '02 RESUME' },
  { id: 'projects', label: '03 PROJECTS' },
  { id: 'metrics', label: '04 METRICS' },
  { id: 'experience', label: '05 EXPERIENCE' },
  { id: 'contact', label: '06 CONTACT' },
]

export default function Header() {
  const [active, setActive] = useState('card-hero')
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)

      const sections = navItems.map(n => document.getElementById(n.id))
      const current = sections.findLast(s => {
        if (!s) return false
        return s.getBoundingClientRect().top <= 120
      })
      if (current) setActive(current.id)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  return (
    <header
      className="fixed top-0 w-full z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(249,249,247,0.92)' : 'rgba(249,249,247,0.8)',
        backdropFilter: 'blur(12px)',
        boxShadow: scrolled ? '0 1px 0 #e2e3e1' : 'none',
      }}
    >
      <div className="h-16 max-w-[1120px] mx-auto px-5 lg:px-12 flex items-center justify-between">
        {/* Logo + status */}
        <div className="flex items-center gap-6">
          <button
            onClick={() => scrollTo('card-hero')}
            className="flex items-center gap-1 font-mono text-xs text-[#1a1c1b] tracking-[0.08em] uppercase hover:text-[#0051d5] transition-colors"
          >
            <span className="font-semibold">KJ</span>
            <span className="text-[#747878]">/</span>
            <span>2026</span>
          </button>

          <div className="hidden sm:flex items-center gap-1.5 px-2 py-1 bg-white rounded-sm border border-[#e2e3e1]">
            <span className="relative w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-[#0051d5] animate-ping opacity-75" />
              <span className="relative block w-1.5 h-1.5 rounded-full bg-[#0051d5]" />
            </span>
            <span className="font-mono text-[0.6875rem] uppercase tracking-[0.08em] text-[#444748]">
              AVAILABLE FOR HIRE
            </span>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden xl:flex items-center gap-6">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`font-mono text-[0.6875rem] tracking-[0.08em] transition-colors ${
                active === item.id
                  ? 'text-[#1a1c1b] font-medium underline underline-offset-8 decoration-[#0051d5]'
                  : 'text-[#444748] hover:text-[#1a1c1b]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Mobile hamburger */}
        <button
          className="xl:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-5 h-px bg-[#1a1c1b] transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-[5px]' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-[#1a1c1b] transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`}
          />
          <span
            className={`block w-5 h-px bg-[#1a1c1b] transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="xl:hidden border-t border-[#e2e3e1] bg-[rgba(249,249,247,0.98)] backdrop-blur-md">
          {navItems.map(item => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`w-full text-left px-5 py-3 font-mono text-xs tracking-[0.08em] border-b border-[#eeeeec] transition-colors ${
                active === item.id
                  ? 'text-[#0051d5] font-medium bg-[#f4f4f2]'
                  : 'text-[#444748] hover:text-[#1a1c1b] hover:bg-[#f4f4f2]'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </header>
  )
}
