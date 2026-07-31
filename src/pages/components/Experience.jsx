import React, { useEffect, useRef, useState } from 'react'
import { CheckCircle2, Briefcase } from 'lucide-react'

const responsibilities = [
  'Designed, developed, and deployed full-stack web applications',
  'Developed RESTful APIs using PHP',
  'Built responsive and user-friendly interfaces',
  'Designed and maintained relational database schemas',
  'Optimized SQL queries for improved performance',
  'Maintained and enhanced production applications',
  'Fixed bugs and implemented new features',
  'Deployed and managed applications using cPanel',
  'Owned the complete development lifecycle from planning to deployment',
]

const techStack = [
  'PHP', 'JavaScript', 'HTML', 'CSS', 'React', 'React Native',
  'jQuery', 'AJAX', 'MySQL', 'Oracle', 'Git', 'cPanel',
]

const Experience = () => {
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
      {
        threshold: 0.15,
        rootMargin: '0px 0px -200px 0px',
      }
    )

    const raf = requestAnimationFrame(() => observer.observe(el))

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="bg-[#F8FAFC] py-[104px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <div
          className={`max-w-[640px] mx-auto mb-14 text-center transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.72rem] uppercase tracking-[0.16em] text-blue-600 font-semibold">
              Experience
            </span>
            <span className="w-8 h-px bg-blue-600" />
          </div>

          <h2 className="font-display tracking-[-0.02em] text-[clamp(1.8rem,3vw,2.3rem)] font-bold text-slate-900">
            Where the work has happened
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 items-start">
          <div
            className={`lg:sticky lg:top-24 transition-all duration-700 ease-out ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: visible ? '120ms' : '0ms' }}
          >
            <div className="group relative bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)]">

              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500" />

              <div className="p-8">

                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white">
                  <Briefcase size={20} strokeWidth={2} />
                </div>

                <h3 className="font-display text-[1.5rem] font-semibold text-slate-900">
                  Full Stack Developer
                </h3>

                <p className="text-blue-600 font-semibold mt-1">
                  LausGroup of Companies
                </p>

                <div className="flex flex-wrap gap-2 mt-4 mb-5">

                  <span className="px-3 py-1 rounded-full bg-blue-50 text-blue-700 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5">
                    Oct 2023 – Present
                  </span>

                  <span className="px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5">
                    ~3 Years
                  </span>

                </div>

                <div className="mb-6">

                  <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">
                    Tech Stack
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {techStack.map((tech, i) => (
                      <span
                        key={tech}
                        className={`px-3 py-1 bg-slate-100 rounded-lg text-sm text-slate-700 transition-all duration-400 ease-out hover:bg-blue-100 hover:text-blue-700 hover:-translate-y-0.5 ${
                          visible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
                        }`}
                        style={{ transitionDelay: visible ? `${300 + i * 40}ms` : '0ms' }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                </div>

                <p className="text-slate-600 leading-relaxed">
                  Independently responsible for designing, developing,
                  deploying, and maintaining business applications from
                  concept to production. Worked across the full software
                  development lifecycle with minimal supervision while
                  delivering scalable and reliable solutions.
                </p>

              </div>

            </div>

          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            {responsibilities.map((item, index) => (

              <div
                key={item}
                className={`group flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-5 hover:border-blue-200 hover:-translate-y-1 hover:shadow-lg transition-all duration-500 ease-out ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: visible ? `${180 + index * 70}ms` : '0ms' }}
              >

                <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center text-blue-600 shrink-0 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:bg-blue-600 group-hover:text-white group-hover:scale-110">
                  <CheckCircle2 size={16} />
                </div>

                <span className="text-[0.94rem] leading-relaxed text-slate-700">
                  {item}
                </span>

              </div>

            ))}

          </div>

        </div>

      </div>
    </section>
  )
}

export default Experience