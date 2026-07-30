import React, { useEffect, useRef, useState } from 'react'
import { Award, Layers, Rocket, Puzzle, Code2, Zap } from 'lucide-react'

const reasons = [
  { text: 'Nearly 3 years of professional experience', icon: Award },
  { text: 'Full-stack development expertise', icon: Layers },
  { text: 'Able to independently deliver complete applications', icon: Rocket },
  { text: 'Strong problem-solving skills', icon: Puzzle },
  { text: 'Clean and maintainable code', icon: Code2 },
  { text: 'Quick learner and adaptable', icon: Zap },
]

const WhyWorkWithMe = () => {
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
      { threshold: 0.15, rootMargin: '0px 0px -150px 0px' }
    )

    const raf = requestAnimationFrame(() => observer.observe(el))

    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <section id="why" ref={sectionRef} className="bg-[#F8FAFC] py-[104px]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section head */}
        <div
          className={`max-w-[640px] mx-auto mb-14 text-center transition-all duration-700 ease-out ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.72rem] text-blue-600 uppercase tracking-[0.16em] font-semibold">
              Why Work With Me
            </span>
            <span className="w-8 h-px bg-blue-600" />
          </div>
          <h2 className="font-display tracking-[-0.02em] text-[clamp(1.8rem,3vw,2.3rem)] font-bold text-slate-900 mb-3.5">
            What you get on day one
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {reasons.map((reason, i) => {
            const Icon = reason.icon
            return (
              <div
                key={reason.text}
                className={`group flex gap-4 items-center bg-white border border-[#E2E8F0] rounded-xl px-6 py-5.5 transition-all duration-500 ease-out hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg hover:shadow-slate-200/50 ${
                  visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
                }`}
                style={{ transitionDelay: visible ? `${i * 80}ms` : '0ms' }}
              >
                <span className="relative shrink-0 w-11 h-11 rounded-full bg-slate-900 text-white flex items-center justify-center transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-110 group-hover:bg-blue-600">
                  <Icon size={18} strokeWidth={2} />
                </span>
                <p className="text-[0.98rem] font-medium text-slate-900 leading-snug">
                  {reason.text}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyWorkWithMe