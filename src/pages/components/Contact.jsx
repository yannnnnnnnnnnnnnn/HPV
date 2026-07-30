import React from 'react'

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-slate-900 text-white text-center py-[104px]"
    >
      {/* Radial gradient glow */}
      <div
        aria-hidden="true"
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(700px 340px at 50% 0%, rgba(37, 99, 235, 0.35), transparent 65%)',
        }}
      />

      <div className="relative max-w-[1180px] mx-auto px-8">
<div className="inline-flex items-center gap-2 mb-4 animate-fade-in-up">
  <span className="w-8 h-px bg-blue-400" />
  <span className="font-mono text-[0.72rem] text-blue-400 uppercase tracking-[0.16em] font-semibold">
    Contact
  </span>
  <span className="w-8 h-px bg-blue-400" />
</div>

        <h2 className="font-poppins tracking-[-0.02em] text-white text-[clamp(1.9rem,3.4vw,2.6rem)] mt-4 mb-4">
          Let's build something great together
        </h2>

        <p className="text-[#B8C2D6] max-w-[520px] mx-auto mb-11 text-[1.02rem]">
          Have a project in mind or an opening on your team? I'd like to hear about it.
        </p>

        <div className="flex justify-center gap-4.5 flex-wrap">
          <a
            href="vinohadrian@gmail.com"
            className="flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.14] px-6.5 py-3.5 rounded-[10px] font-semibold text-[0.95rem] text-inherit no-underline transition-all duration-200 hover:bg-white/[0.12] hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16v16H4z" />
              <path d="M4 6l8 7 8-7" />
            </svg>
            Email
          </a>
<a
          
            href="https://www.linkedin.com/in/hadrian-vino/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.14] px-6.5 py-3.5 rounded-[10px] font-semibold text-[0.95rem] text-inherit no-underline transition-all duration-200 hover:bg-white/[0.12] hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <path d="M7 10v7M7 7v.01M11 17v-4a2 2 0 0 1 4 0v4M11 13v4" />
            </svg>
            LinkedIn
          </a>
<a
    
            href="https://github.com/yannnnnnnnnnnnnnn"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2.5 bg-white/[0.06] border border-white/[0.14] px-6.5 py-3.5 rounded-[10px] font-semibold text-[0.95rem] text-inherit no-underline transition-all duration-200 hover:bg-white/[0.12] hover:-translate-y-0.5"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.89 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.56-1.11-4.56-4.93 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.65 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.38.2 2.4.1 2.65.64.7 1.03 1.59 1.03 2.68 0 3.83-2.34 4.68-4.57 4.92.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z" />
            </svg>
            GitHub
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact