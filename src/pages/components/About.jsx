import React, { useEffect, useRef, useState } from 'react'
import { Briefcase, Code2, Server, Database, Smartphone, Rocket, Sparkles } from 'lucide-react'

const quickFacts = [
  { label: 'Experience', value: '3+ Years', icon: Briefcase },
  { label: 'Focus', value: 'Full Stack', icon: Code2 },
  { label: 'Backend', value: 'PHP · REST APIs', icon: Server },
  { label: 'Database', value: 'MySQL · Oracle', icon: Database },
  { label: 'Mobile', value: 'React Native', icon: Smartphone },
  { label: 'Deployment', value: 'cPanel · Shared Hosting', icon: Rocket },
]

const About = () => {
  const [activeIndex, setActiveIndex] = useState(null)
  const cardRef = useRef(null)

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(hover: none)').matches
    if (!isTouchDevice) return

    let interval

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActiveIndex(0)
          interval = setInterval(() => {
            setActiveIndex((prev) => (prev === null ? 0 : (prev + 1) % quickFacts.length))
          }, 1600)
        } else {
          clearInterval(interval)
          setActiveIndex(null)
        }
      },
      { threshold: 0.4 }
    )

    if (cardRef.current) observer.observe(cardRef.current)

    return () => {
      clearInterval(interval)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="about" className="relative py-16 sm:py-20 lg:py-[104px] bg-white overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute top-1/2 -left-32 w-96 h-96 bg-blue-100/30 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"
      />

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto mb-10 sm:mb-12 lg:mb-14 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.72rem] text-blue-600 uppercase tracking-[0.16em] font-semibold">
              About
            </span>
            <span className="w-8 h-px bg-blue-600" />
          </div>
          <h2 className="font-display tracking-[-0.02em] text-[clamp(1.6rem,4.5vw,2.3rem)] font-bold text-slate-900 mb-4 leading-tight animate-fade-in-up [animation-delay:60ms]">
            Turning ideas into{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">production-ready</span>
            
            </span>{' '}
            software
          </h2>
          <p className="text-slate-500 text-[0.95rem] sm:text-[1rem] leading-relaxed animate-fade-in-up [animation-delay:120ms]">
            A full-stack developer who ships complete systems from schema to UI.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-8 lg:gap-16 items-start">
          <div
            ref={cardRef}
            className="relative bg-gradient-to-br from-white to-slate-50/70 border border-slate-200 rounded-2xl p-6 sm:p-7 lg:p-8 shadow-[0_1px_3px_rgba(15,23,42,0.04)] animate-fade-in-up [animation-delay:150ms] transition-all duration-300 hover:shadow-[0_12px_30px_rgba(15,23,42,0.08)] hover:-translate-y-1"
          >
            <div className="absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r from-transparent via-blue-600 to-transparent rounded-full" />

            <h3 className="font-display tracking-[-0.02em] text-[1rem] sm:text-[1.05rem] text-slate-900 mb-5 flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Quick Facts
            </h3>
            <div className="flex flex-col gap-1">
              {quickFacts.map((fact, i) => {
                const Icon = fact.icon
                const isActive = activeIndex === i
                return (
                  <div
                    key={fact.label}
                    className={`group flex items-center justify-between gap-3 py-3 px-3 -mx-3 rounded-xl border-l-2 transition-all duration-300 hover:bg-slate-50 hover:border-l-blue-600 hover:translate-x-1 focus-within:bg-slate-50 focus-within:border-l-blue-600 animate-fade-in-up ${
                      isActive
                        ? 'bg-slate-50 border-l-blue-600 translate-x-1'
                        : 'border-l-transparent'
                    }`}
                    style={{ animationDelay: `${220 + i * 50}ms` }}
                    tabIndex={0}
                  >
                    <span className="flex items-center gap-2.5 text-[0.86rem] sm:text-[0.9rem] text-slate-600">
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-lg bg-blue-50 text-blue-600 shrink-0 transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105 group-focus-within:bg-blue-600 group-focus-within:text-white ${
                          isActive ? 'bg-blue-600 text-white scale-105' : ''
                        }`}
                      >
                        <Icon size={15} strokeWidth={2.2} />
                      </span>
                      {fact.label}
                    </span>
                    <span
                      className={`font-semibold text-slate-900 text-[0.86rem] sm:text-[0.92rem] text-right transition-colors duration-200 group-hover:text-blue-600 ${
                        isActive ? 'text-blue-600' : ''
                      }`}
                    >
                      {fact.value}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>


          <div className="animate-fade-in-up [animation-delay:220ms]">
            <div className="inline-flex items-center gap-2 mb-5 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-200/60">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="text-[0.78rem] font-medium text-emerald-700">
                Available for new projects
              </span>
            </div>

            <p className="text-slate-800 text-[1.08rem] sm:text-[1.15rem] leading-[1.6] mb-5 font-medium">
              I'm a <span className="text-blue-600 font-semibold">Full Stack Developer</span> with
              nearly three years of professional experience developing business applications from
              concept to deployment.
            </p>

            <p className="text-slate-600 text-[0.98rem] sm:text-[1.02rem] leading-[1.75] mb-4">
              I specialize in building complete systems independently from database design and
              API development to responsive user interfaces. My experience includes internal
              enterprise applications, RESTful APIs, inventory management systems, and mobile apps.
            </p>

            <p className="text-slate-600 text-[0.98rem] sm:text-[1.02rem] leading-[1.75] mb-6">
              I enjoy solving complex problems, writing clean and maintainable code, and
              continuously learning modern technologies to improve software quality.
            </p>

            <div className="flex items-start gap-3 p-2 rounded-xl bg-blue-50/50 border border-blue-100">
              <Sparkles size={18} className="text-blue-600 shrink-0 mt-0.5" strokeWidth={2.2} />
              <p className="text-slate-700 text-[0.9rem] leading-relaxed">
                <span className="font-semibold text-slate-900">Currently exploring:</span>{' '}
                  MERN Stack, scalable React applications, Node.js APIs, MongoDB, and CI/CD workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About