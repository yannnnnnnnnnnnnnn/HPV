import React, { useEffect, useRef, useState } from 'react'
import { Layout, Server, Database, Component, Smartphone, Wrench, ArrowUpRight } from 'lucide-react'

const services = [
  {
    icon: Layout,
    title: 'Web Development',
    description: 'Responsive and scalable web applications built for real business needs.',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    icon: Server,
    title: 'Backend Development',
    description: 'REST APIs and business logic implementation using PHP.',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    icon: Database,
    title: 'Database Design',
    description: 'Efficient relational structures and optimized SQL queries.',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    icon: Component,
    title: 'UI Development',
    description: 'Clean, responsive, and user-friendly interfaces people enjoy using.',
    accent: 'from-sky-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Mobile Development',
    description: 'Cross-platform mobile apps built with React Native.',
    accent: 'from-blue-500 to-sky-500',
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    description: 'Bug fixes, optimization, and ongoing improvements to production apps.',
    accent: 'from-violet-500 to-blue-500',
  },
]

const WhatIDo = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
useEffect(() => {
  const el = sectionRef.current
  if (!el) return

  const isMobile = window.innerWidth < 640 
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true)
        observer.disconnect()
      }
    },
    {
      threshold: 0.15,
      rootMargin: isMobile
        ? '0px 0px -350px 0px'
        : '0px 0px -350px 0px',
    }
  )

  const raf = requestAnimationFrame(() => observer.observe(el))

  return () => {
    cancelAnimationFrame(raf)
    observer.disconnect()
  }
}, [])

  return (
    <section
      id="what-i-do"
      ref={sectionRef}
      className="relative bg-[#F8FAFC] py-16 sm:py-20 lg:py-[104px] overflow-hidden"
    >
      <div
        aria-hidden="true"
        className="absolute top-1/3 -right-32 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none"
      />
      <div
        aria-hidden="true"
        className="absolute bottom-0 -left-20 w-80 h-80 bg-indigo-100/30 rounded-full blur-3xl pointer-events-none"
      />

      <div className="relative max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8">
        <div className="max-w-[640px] mx-auto mb-12 sm:mb-14 text-center">
          <div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
            <span className="w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.72rem] text-blue-600 uppercase tracking-[0.16em] font-semibold">
              What I Do
            </span>
            <span className="w-8 h-px bg-blue-600" />
          </div>
          <h2 className="font-display tracking-[-0.02em] text-[clamp(1.8rem,3vw,2.3rem)] font-bold text-slate-900 mb-4 leading-tight animate-fade-in-up [animation-delay:60ms]">
            End-to-end capability,{' '}
            <span className="relative inline-block">
              <span className="relative z-10 text-blue-600">one engineer</span>
            </span>
          </h2>
          <p className="text-slate-500 text-[0.95rem] sm:text-[1.02rem] leading-relaxed animate-fade-in-up [animation-delay:120ms]">
            From database schema to the pixel on screen I cover the full stack so teams
            don't have to coordinate across five people to ship one feature.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
          {services.map((service, i) => {
            const Icon = service.icon
            return (
              <article
                key={service.title}
                tabIndex={0}
                className={`group relative bg-gradient-to-br from-white to-slate-50/60 border border-slate-200 rounded-2xl p-6 sm:p-7 cursor-pointer overflow-hidden
                  transition-all duration-500 ease-out
                  hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] hover:border-blue-300
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2
                  ${
                    visible
                      ? 'opacity-100 translate-y-0'
                      : 'opacity-0 translate-y-6'
                  }`}
                style={{
                  transitionDelay: visible ? `${i * 120}ms` : '0ms',
                }}
              >

                <div
                  className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${service.accent} rounded-full opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />
                <ArrowUpRight
                  size={16}
                  strokeWidth={2.2}
                  className="absolute top-5 right-5 text-slate-300 transition-all duration-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />

                <div className="relative w-11 h-11 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-5 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:bg-blue-600 group-hover:text-white group-hover:scale-105">
                  <Icon size={20} strokeWidth={2} />
                </div>

                <h3 className="font-display tracking-[-0.02em] text-[1.05rem] sm:text-[1.1rem] text-slate-900 mb-2 transition-colors duration-200 group-hover:text-blue-600">
                  {service.title}
                </h3>
                <p className="text-slate-600 text-[0.92rem] sm:text-[0.95rem] leading-relaxed">
                  {service.description}
                </p>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhatIDo
