import { useEffect, useState } from 'react'
import { motion, useScroll, useSpring } from 'framer-motion'
import { useTheme } from '../context/ThemeContext'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

const links = [
  { href: '#home', id: 'home', label: 'Home' },
  { href: '#about', id: 'about', label: 'About' },
  { href: '#impact', id: 'impact', label: 'Impact' },
  { href: '#capabilities', id: 'capabilities', label: 'Craft' },
  { href: '#projects', id: 'projects', label: 'Projects' },
  { href: '#contact', id: 'contact', label: 'Contact' },
]

const Navbar = () => {
  const { theme, toggleTheme } = useTheme()
  const [activeSection, setActiveSection] = useState('home')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 22, mass: 0.3 })

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      {
        rootMargin: '-42% 0px -48% 0px',
        threshold: 0,
      }
    )

    links.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-border/60 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/65">
      <motion.div
        aria-hidden
        style={{ scaleX }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary/0 via-primary to-primary/0"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <a
            href="#home"
            className="flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label="Zakariye home"
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg border border-primary/20 bg-primary/10 text-sm font-bold text-primary">
              ZS
            </span>
            <span className="hidden text-sm font-semibold tracking-wide text-foreground sm:block">
              Zakariye Sahid
            </span>
          </a>

          <div className="flex items-center gap-2">
            <div className="hidden items-center rounded-full border border-border/70 bg-card/50 p-1 shadow-sm md:flex">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  aria-current={activeSection === link.id ? 'page' : undefined}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                    activeSection === link.id
                      ? 'bg-primary/10 text-foreground shadow-sm'
                      : 'text-foreground/65 hover:bg-primary/10 hover:text-foreground'
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
            <button
              onClick={toggleTheme}
              className="grid h-10 w-10 place-items-center rounded-full border border-border/70 bg-card/60 text-foreground/70 shadow-sm transition-colors hover:bg-primary/10 hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? (
                <SunIcon className="w-5 h-5" />
              ) : (
                <MoonIcon className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
        <div className="-mx-4 flex gap-2 overflow-x-auto border-t border-border/45 px-4 py-2 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              aria-current={activeSection === link.id ? 'page' : undefined}
              className={`min-h-11 whitespace-nowrap rounded-full px-4 py-2.5 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 ${
                activeSection === link.id
                  ? 'bg-primary/10 text-foreground'
                  : 'text-foreground/65 hover:bg-primary/10 hover:text-foreground'
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
