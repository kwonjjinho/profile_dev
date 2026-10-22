import { useState, useEffect } from 'react'

const navItems = [
  { id: 'card-hero', label: '01 INTRO' },
  { id: 'resume', label: '02 RESUME' },
  { id: 'projects', label: '03 PROJECTS' },
  { id: 'metrics', label: '04 METRICS' },
  { id: 'experience', label: '05 EXPERIENCE' },
  { id: 'contact', label: '06 CONTACT' },
]

export default function SideNav() {
  const [active, setActive] = useState('card-hero')

  useEffect(() => {
    const handleScroll = () => {
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

  return (
    <aside className="hidden 2xl:flex fixed right-8 top-1/2 -translate-y-1/2 z-40 flex-col gap-4">
      {navItems.map(item => (
        <button
          key={item.id}
          onClick={() => document.getElementById(item.id)?.scrollIntoView({ behavior: 'smooth' })}
          className="group flex items-center gap-2 justify-end text-[#444748] hover:text-[#0051d5] transition-colors"
        >
          <span
            className={`font-mono text-[0.6875rem] tracking-[0.08em] transition-opacity ${
              active === item.id ? 'opacity-100 text-[#0051d5]' : 'opacity-0 group-hover:opacity-100'
            }`}
          >
            {item.label}
          </span>
          <span
            className={`h-px bg-[#c4c7c7] transition-all duration-200 group-hover:bg-[#0051d5] ${
              active === item.id ? 'w-8 bg-[#0051d5]' : 'w-4 group-hover:w-8'
            }`}
          />
        </button>
      ))}
    </aside>
  )
}
