import React, { useEffect, useRef, useState } from 'react'
import { ArrowUpRight } from 'lucide-react'

const projects = [
  {
    index: '01',
    category: 'Enterprise System',
    title: 'MediSync',
    description:
      'Medical inventory management system for tracking medicine stock, requests, and expiration across a healthcare operation.',
    features: ['Inventory Management', 'Medicine Tracking', 'Expiration Alerts', 'Dashboard Analytics', 'Role-based Access'],
    tech: 'PHP · MySQL · Bootstrap · JavaScript · AJAX · jQuery',
    glyph: 'Rx',
    label: 'MediSync',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    index: '02',
    category: 'Healthcare Website',
    title: 'Green City Cancer Center',
    description:
      'Healthcare website featuring responsive design and a modern, calming user experience for patients and families.',
    features: ['Responsive Design', 'Content Pages'],
    tech: 'React · Bootstrap · CSS',
    glyph: 'GC',
    label: 'Green City',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    index: '03',
    category: 'Consumer Platform',
    title: 'E-Fashion',
    description:
      'Virtual clothing recommendation platform that lets users upload their photo and preview outfit combinations before buying.',
    features: ['Image Upload', 'Outfit Recommendation', 'Fashion Preview'],
    tech: 'React · JavaScript',
    glyph: 'EF',
    label: 'E-Fashion',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    index: '04',
    category: 'Mobile',
    title: 'Mobile Applications',
    description:
      'Cross-platform mobile applications built to share a single codebase across iOS and Android.',
    features: ['Cross-Platform', 'iOS & Android'],
    tech: 'React Native',
    glyph: 'RN',
    label: 'Mobile Apps',
    accent: 'from-violet-500 to-blue-500',
  },
]

const Projects = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -150px 0px' }
    )

    const raf = requestAnimationFrame(() => observer.observe(el))

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="projects" ref={sectionRef} className="py-[104px]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section head */}
        <div className="max-w-[640px] mx-auto mb-14 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.72rem] text-blue-600 uppercase tracking-[0.16em] font-semibold">
              Projects
            </span>
            <span className="w-8 h-px bg-blue-600" />
          </div>
          <h2 className="font-display tracking-[-0.02em] text-[clamp(1.8rem,3vw,2.3rem)] font-bold text-slate-900 mb-3.5">
            Selected work
          </h2>
        </div>

        {/* Project list */}
        <div className="flex flex-col gap-6.5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className={`group relative bg-gradient-to-br from-white to-slate-50/60 border border-[#E2E8F0] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 gap-9 items-center transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_24px_48px_-16px_rgba(15,23,42,0.18)] hover:border-blue-200 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: visible ? `${i * 120}ms` : '0ms' }}
            >
              {/* Top accent bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                aria-hidden="true"
              />

              {/* Text content */}
              <div className="p-9 md:pr-0">
                <div className="flex items-center gap-3 mb-3.5">
                  <span
                    className={`font-mono text-[0.78rem] font-bold text-white bg-gradient-to-br ${project.accent} w-7 h-7 rounded-lg flex items-center justify-center shrink-0`}
                  >
                    {project.index}
                  </span>
                  <span className="font-mono text-[#8A93A3] text-[0.78rem] uppercase tracking-[0.08em]">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-display tracking-[-0.02em] text-[1.35rem] text-slate-900 mb-2.5 flex items-center gap-2">
                  {project.title}
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2.2}
                    className="text-slate-300 transition-all duration-300 group-hover:text-blue-600 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </h3>

                <p className="text-[#5B6472] text-[0.98rem] leading-relaxed mb-4.5">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4.5">
                  {project.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-[0.82rem] px-3 py-1.5 rounded-lg bg-[#F8FAFC] text-slate-900 font-medium border border-[#E2E8F0] transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="font-mono text-[0.82rem] text-blue-600 pt-3.5 border-t border-slate-100">
                  {project.tech}
                </div>
              </div>

              {/* Visual */}
              <div className="relative overflow-hidden min-h-[220px] md:min-h-[260px] flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800 md:rounded-l-none rounded-b-2xl md:rounded-r-2xl">
                <div
                  aria-hidden="true"
                  className="absolute inset-0 opacity-[0.07]"
                  style={{
                    backgroundImage:
                      'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
                    backgroundSize: '24px 24px',
                  }}
                />
                <span className="font-display font-extrabold text-[4rem] text-white/[0.08] tracking-[-0.03em] transition-transform duration-500 ease-out group-hover:scale-110">
                  {project.glyph}
                </span>
                <span
                  className={`absolute font-display font-bold text-[1.15rem] text-white bg-gradient-to-br ${project.accent} px-5 py-2.5 rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105`}
                >
                  {project.label}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects