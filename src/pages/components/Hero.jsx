import React, { useState, useEffect } from 'react'
import { ArrowRight, Mail } from 'lucide-react'

const stats = [
  { value: '~3 Years', label: 'Full Stack Development', countTo: 3 },
  { value: 'REST', label: 'API Development' },
  { value: 'iOS / Android', label: 'Mobile Development' },
]

const Hero = () => {
  const fullText = 'currently building something new'
  const [typedText, setTypedText] = useState('')
  const [yearCount, setYearCount] = useState(1)

  useEffect(() => {
    let i = 0
    let isDeleting = false
    let timeoutId

    const TYPE_SPEED = 40
    const DELETE_SPEED = 25
    const PAUSE_AFTER_TYPE = 1500
    const PAUSE_AFTER_DELETE = 500

    const tick = () => {
      if (!isDeleting) {
        i++
        setTypedText(fullText.slice(0, i))
        if (i === fullText.length) {
          isDeleting = true
          timeoutId = setTimeout(tick, PAUSE_AFTER_TYPE)
          return
        }
        timeoutId = setTimeout(tick, TYPE_SPEED)
      } else {
        i--
        setTypedText(fullText.slice(0, i))
        if (i === 0) {
          isDeleting = false
          timeoutId = setTimeout(tick, PAUSE_AFTER_DELETE)
          return
        }
        timeoutId = setTimeout(tick, DELETE_SPEED)
      }
    }

    timeoutId = setTimeout(tick, TYPE_SPEED)
    return () => clearTimeout(timeoutId)
  }, [])

  useEffect(() => {
    const target = stats.find((s) => s.countTo)?.countTo || 3
    let current = 1
    setYearCount(1)

    const interval = setInterval(() => {
      current++
      setYearCount(current)
      if (current >= target) clearInterval(interval)
    }, 200)

    return () => clearInterval(interval)
  }, [])

  return (
    <section
      id="home"
      className="relative overflow-hidden bg-white pt-[70px] pb-[60px] sm:pt-[80px] sm:pb-[80px] lg:pt-[90px] lg:pb-[100px]"
    >
      <div className="relative z-10 max-w-[1180px] mx-auto px-5 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-10 lg:gap-16 items-center">
   
        <div className="text-center lg:text-left">
          <span className="inline-flex items-center gap-2 font-mono text-[0.72rem] sm:text-[0.78rem] text-blue-600 bg-[#EFF4FF] border border-[#DCE7FF] px-3 sm:px-3.5 py-1.5 rounded-full mb-5 sm:mb-6 tracking-wide animate-fade-in-up [animation-delay:50ms]">
            <span className="w-[7px] h-[7px] rounded-full bg-green-500 shadow-[0_0_0_3px_rgba(34,197,94,0.18)] animate-pulse" />
            Available for new opportunities
          </span>

          <h1 className="font-poppins tracking-[-0.02em] text-[clamp(2rem,7vw,3.4rem)] font-bold leading-[1.15] text-slate-900 mb-4 sm:mb-4.5 animate-fade-in-up [animation-delay:160ms]">
            Hi, I'm <span className="text-blue-600">Hadrian Vino</span>
          </h1>

          <div className="font-poppins text-[1.1rem] sm:text-[1.2rem] lg:text-[1.28rem] font-semibold text-slate-900 mb-4 sm:mb-5 animate-fade-in-up [animation-delay:270ms]">
            Full Stack Developer
          </div>

          <p className="text-[0.95rem] sm:text-[1rem] lg:text-[1.05rem] text-[#5B6472] max-w-[520px] mx-auto lg:mx-0 mb-7 sm:mb-8 animate-fade-in-up [animation-delay:380ms]">
            I build scalable web and mobile applications with a strong focus on
            performance, maintainability, and user experience from intuitive
            interfaces to reliable back-end systems.
          </p>

          <div className="flex justify-center lg:justify-start gap-6 sm:gap-8 flex-wrap mb-8 sm:mb-9 animate-fade-in-up [animation-delay:490ms]">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center lg:text-left">
                <strong className="block font-poppins text-[1.05rem] sm:text-[1.15rem] text-slate-900 font-bold">
                  {stat.countTo ? `~${yearCount} Years` : stat.value}
                </strong>
                <span className="text-[0.78rem] sm:text-[0.82rem] text-[#8A93A3]">{stat.label}</span>
              </div>
            ))}
          </div>

          <div className="flex justify-center lg:justify-start gap-3 sm:gap-4 flex-wrap animate-fade-in-up [animation-delay:600ms]">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-[26px] py-3.5 sm:py-[14px] rounded-[9px] font-semibold text-[0.9rem] sm:text-[0.95rem] bg-blue-600 text-white no-underline transition-all duration-300 hover:bg-blue-700 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-blue-500/25 w-full sm:w-auto"
            >
              View Projects
              <ArrowRight
                size={16}
                strokeWidth={2.5}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>
             <a
              href="#contact"
              className="group inline-flex items-center justify-center gap-2 px-6 sm:px-[26px] py-3.5 sm:py-[14px] rounded-[9px] font-semibold text-[0.9rem] sm:text-[0.95rem] bg-white text-slate-900 border border-slate-200 no-underline transition-all duration-300 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <Mail size={16} strokeWidth={2.5} />
              Contact Me
            </a>
          </div>
        </div>

        <div className="animate-fade-in-up [animation-delay:300ms] w-full">
          <div className="bg-slate-900 rounded-2xl overflow-hidden shadow-[0_30px_60px_-20px_rgba(15,23,42,0.45)] rotate-0 lg:rotate-1 transition-transform duration-500 hover:rotate-0">
            <div className="flex items-center gap-2 px-4 sm:px-4.5 py-3 sm:py-3.5 bg-[#16213A] border-b border-white/[0.06]">
              <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F57]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#FEBC2E]" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#28C840]" />
              <span className="ml-2 font-mono text-[0.72rem] sm:text-[0.76rem] text-[#8A93A3]">
                hadrian.js
              </span>
            </div>

            <pre className="px-4 sm:px-5 lg:px-6 pt-5 sm:pt-6 lg:pt-6.5 pb-6 sm:pb-7 lg:pb-7.5 font-mono text-[0.72rem] sm:text-[0.8rem] lg:text-[0.86rem] leading-[1.7] sm:leading-[1.8] lg:leading-[1.85] overflow-x-auto text-slate-300">
              <span className="text-[#C4B5FD]">const</span>{' '}
              <span className="text-[#93C5FD]">developer</span> = {'{'}
              {'\n'}  name: <span className="text-[#86EFAC]">'Hadrian Vino'</span>,
              {'\n'}  role: <span className="text-[#86EFAC]">'Full Stack Developer'</span>,
              {'\n'}  experience: <span className="text-[#86EFAC]">'~3 years'</span>,
              {'\n'}  stack: [<span className="text-[#86EFAC]">'React'</span>,{' '}
              <span className="text-[#86EFAC]">'PHP'</span>,{' '}
              <span className="text-[#86EFAC]">'MySQL'</span>,
              {'\n'}          <span className="text-[#86EFAC]">'React Native'</span>],
              {'\n'}  <span className="text-[#7DD3FC]">focus</span>: [
              {'\n'}    <span className="text-[#86EFAC]">'performance'</span>,
              {'\n'}    <span className="text-[#86EFAC]">'maintainability'</span>,
              {'\n'}    <span className="text-[#86EFAC]">'user experience'</span>
              {'\n'}  ],
              {'\n'}  <span className="text-[#7DD3FC]">delivers</span>:{' '}
              <span className="text-[#C4B5FD]">() =&gt;</span>{' '}
              <span className="text-[#86EFAC]">'production-ready code'</span>
              {'\n'}{'}'};
              {'\n\n'}
              <span className="text-[#64748B]">// {typedText}</span>
              <span className="inline-block w-[7px] h-[15px] bg-blue-600 align-[-2px] animate-blink" />
            </pre>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero