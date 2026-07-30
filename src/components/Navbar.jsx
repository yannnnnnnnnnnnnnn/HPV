import React, { useState, useEffect } from 'react'
import logo from '../assets/Logo1.png'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
]

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const sectionIds = navLinks.map((link) => link.href.slice(1))

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8)

      const scrollPos = window.scrollY + window.innerHeight * 0.35
      let current = sectionIds[0]
      for (const id of sectionIds) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActiveSection(current)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNavClick = (e, href) => {
    e.preventDefault()
    const id = href.slice(1)
    const el = document.getElementById(id)
    if (!el) return

    const navHeight = document.querySelector('header').offsetHeight
    const targetY = el.getBoundingClientRect().top + window.scrollY - navHeight

    window.scrollTo({ top: targetY, behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <header
      className={`sticky top-0 z-100 bg-white/85 backdrop-blur-md transition-all duration-300 ${
        isScrolled ? 'border-b border-slate-200 shadow-sm' : 'border-b border-transparent'
      }`}
    >
      <nav className="flex items-center justify-between px-8 py-2 max-w-295 mx-auto">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-2.5 font-display font-bold text-lg text-inherit no-underline"
        >
          <img
            src={logo}
            alt="Hadrian Vino logo"
            className="w-10 h-10 rounded-[9px] object-contain border-black transition-transform duration-300 ease-out hover:-rotate-8"
          />
          Hadrian Vino
        </a>

        <ul className="hidden md:flex items-center gap-9 text-[0.94rem] font-medium list-none m-0 p-0">
          {navLinks.map((link) => {
            const isActive = activeSection === link.href.slice(1)
            return (
              <li key={link.href} className="relative">
                <a
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`group relative inline-block no-underline pb-1 transition-colors duration-300 ${
                    isActive ? 'text-[#0F172A]' : 'text-[#5B6472] hover:text-[#0F172A]'
                  }`}
                >
                  {link.label}
                  <span
                    className={`absolute left-0 -bottom-0.5 h-[2px] bg-[#2563EB] origin-left transition-transform duration-300 ease-out ${
                      isActive
                        ? 'w-full scale-x-100'
                        : 'w-full scale-x-0 group-hover:scale-x-100'
                    }`}
                  />
                </a>
              </li>
            )
          })}
          <li>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="relative overflow-hidden bg-slate-900 text-white no-underline px-5 py-2.5 rounded-lg text-[0.88rem] font-semibold inline-block text-center border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-[#]/10 hover:backdrop-blur-md hover:border-white/30 hover:shadow-lg hover:shadow-black/10 hover:-translate-y-0.5"
            >
              Contact Me
            </a>
          </li>
        </ul>

        <button
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle navigation"
          aria-expanded={isOpen}
          className="md:hidden p-1.5 bg-transparent border-none cursor-pointer"
        >
          <span className={`block w-[22px] h-0.5 bg-slate-900 my-1.5 transition-all duration-200 ${isOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-slate-900 my-1.5 transition-all duration-200 ${isOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-[22px] h-0.5 bg-slate-900 my-1.5 transition-all duration-200 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </nav>

      {isOpen && (
        <ul className="md:hidden flex flex-col gap-4 px-8 pb-6 text-[0.94rem] font-medium list-none m-0">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="text-[#5B6472] no-underline transition-colors duration-300 hover:text-[#0F172A]"
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#contact"
  onClick={(e) => handleNavClick(e, '#contact')}
 className="relative overflow-hidden bg-slate-900 text-white no-underline px-5 py-2.5 rounded-lg text-[0.88rem] font-semibold inline-block text-center border border-white/10 backdrop-blur-sm transition-all duration-300 hover:bg-blue-600 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-500/30 hover:-translate-y-0.5"
>
  Contact Me
</a>
          </li>
        </ul>
      )}
    </header>
  )
}

export default Navbar