import React, { useEffect, useRef, useState } from 'react'
import {
  Leaf,
  ScanSearch,
  Bug,
  Dog,
  MapPin,
  Satellite,
  Smartphone,
  Shirt,
  Sparkles,
  Wand2,
  Printer,
  ShoppingCart,
  Package,
  Pill,
  BarChart3,
  ShieldCheck,
} from 'lucide-react'

const projects = [
  {
    index: '01',
    category: 'Agriculture Technology (AgriTech)',
    title: 'DeepLeaf',
    description:
      'A React Native mobile application that uses the Plant.id API to identify plants, detect plant diseases, and provide treatment recommendations. The app also includes a plant library with detailed, step-by-step growing guides to help users care for different plant species.',
    features: ['Plant Identification', 'Disease Detection', 'Treatment Recommendations', 'Plant Growing Guides', 'Plant.id API'],
    tech: 'React Native · Plant.id API',
    glyph: 'Rx',
    label: 'DeepLeaf',
    accent: 'from-blue-500 to-indigo-500',
  },
  {
    index: '02',
    category: 'Pet Tracking',
    title: 'PawCare',
    description:
      "An IoT-powered React Native mobile application that enables pet owners to monitor their dog's real-time GPS location. The system integrates a custom Arduino-based tracking device, a PHP REST API, and a mobile app to provide live location updates while allowing users to manage multiple pet profiles.",
    features: ['Real-Time GPS Tracking', 'Arduino IoT Device', 'Dog Management', 'Multi-Pet Support', 'PHP REST API', 'Location Monitoring'],
    tech: 'React Native · PHP · REST API · Arduino · GPS Module · MySQL',
    glyph: 'RN',
    label: 'PawCare',
    accent: 'from-violet-500 to-blue-500',
  },
  {
    index: '03',
    category: 'AI-Powered E-Commerce · FashionTech',
    title: 'E-Fashion',
    description:
      'An AI-powered e-commerce platform that enables customers to virtually try on clothing before purchasing. Users can browse products, upload a full body image, and generate a realistic outfit preview using the FASHN AI API. The platform also includes a vendor dashboard for managing products and processing customer orders.',
    features: ['Virtual Try-On', 'AI Outfit Preview', 'Product Catalog', 'Vendor Dashboard', 'Order Management', 'Full-Body Image Upload'],
    tech: 'PHP · HTML · CSS3 · JavaScript · MySQL · REST API · FASHN AI API',
    glyph: 'EF',
    label: 'E-Fashion',
    accent: 'from-cyan-500 to-blue-500',
  },
  {
    index: '04',
    category: 'AI-Powered Marketplace · Print-on-Demand',
    title: 'PrintRoute',
    description:
      'An AI-powered print-on-demand marketplace available as both a web and mobile application. Customers can customize printable products by adding text or images and generating AI-designed artwork using the OpenAI API before placing an order. The platform includes dedicated customer, vendor, and admin portals for product customization, order management, vendor verification, and marketplace administration.',
    features: ['AI Image Generation', 'Product Customization', 'Print-on-Demand', 'Shopping Cart', 'Order Tracking', 'Payment Integration', 'Vendor Dashboard', 'Admin Dashboard', 'Vendor Verification'],
    tech: 'PHP · HTML · CSS3 · JavaScript · React Native · MySQL · REST API · OpenAI API',
    glyph: 'GC',
    label: 'PrintRoute',
    accent: 'from-indigo-500 to-violet-500',
  },
  {
    index: '05',
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
]

const illustrations = {
  DeepLeaf: {
    base: 'from-emerald-950 via-slate-900 to-slate-950',
    glowA: 'bg-emerald-500/30',
    glowB: 'bg-teal-400/20',
    ring: 'ring-emerald-400/30',
    grid: 'rgba(110,231,183,0.18)',
    primary: { Icon: Leaf, color: 'text-emerald-400', glow: 'drop-shadow-[0_0_22px_rgba(52,211,153,0.6)]' },
    satellites: [
      { Icon: ScanSearch, pos: 'top-3 right-3 sm:top-4 sm:right-5 md:top-5 md:right-6', color: 'text-emerald-200', dur: '5.5s', delay: '0s' },
      { Icon: Bug, pos: 'bottom-4 left-3 sm:bottom-5 sm:left-5 md:bottom-6 md:left-7', color: 'text-teal-200', dur: '6.5s', delay: '0.8s' },
    ],
    connectors: true,
    accentDot: 'bg-emerald-400',
  },
  PawCare: {
    base: 'from-violet-950 via-slate-900 to-slate-950',
    glowA: 'bg-violet-500/30',
    glowB: 'bg-blue-400/20',
    ring: 'ring-violet-400/30',
    grid: 'rgba(167,139,250,0.18)',
    primary: { Icon: Dog, color: 'text-violet-300', glow: 'drop-shadow-[0_0_22px_rgba(167,139,250,0.6)]' },
    satellites: [
      { Icon: MapPin, pos: 'top-3 left-3 sm:top-4 sm:left-5 md:top-6 md:left-7', color: 'text-blue-200', dur: '5s', delay: '0.2s' },
      { Icon: Satellite, pos: 'top-3 right-3 sm:top-4 sm:right-5 md:top-5 md:right-6', color: 'text-violet-200', dur: '7s', delay: '1s' },
      { Icon: Smartphone, pos: 'bottom-4 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-8', color: 'text-blue-200', dur: '6s', delay: '0.5s' },
    ],
    connectors: false,
    accentDot: 'bg-violet-400',
  },
  'E-Fashion': {
    base: 'from-cyan-950 via-slate-900 to-slate-950',
    glowA: 'bg-cyan-500/30',
    glowB: 'bg-sky-400/20',
    ring: 'ring-cyan-400/30',
    grid: 'rgba(103,232,249,0.2)',
    primary: { Icon: Shirt, color: 'text-cyan-300', glow: 'drop-shadow-[0_0_22px_rgba(103,232,249,0.6)]' },
    satellites: [
      { Icon: Sparkles, pos: 'top-3 right-3 sm:top-4 sm:right-5 md:top-5 md:right-7', color: 'text-cyan-200', dur: '4.5s', delay: '0.1s' },
      { Icon: Wand2, pos: 'bottom-4 left-3 sm:bottom-5 sm:left-5 md:bottom-7 md:left-7', color: 'text-sky-200', dur: '6s', delay: '0.9s' },
    ],
    connectors: false,
    accentDot: 'bg-cyan-400',
  },
  PrintRoute: {
    base: 'from-fuchsia-950 via-slate-900 to-slate-950',
    glowA: 'bg-fuchsia-500/30',
    glowB: 'bg-pink-400/20',
    ring: 'ring-fuchsia-400/30',
    grid: 'rgba(232,121,249,0.2)',
    primary: { Icon: Printer, color: 'text-fuchsia-300', glow: 'drop-shadow-[0_0_22px_rgba(232,121,249,0.6)]' },
    satellites: [
      { Icon: Sparkles, pos: 'top-3 left-3 sm:top-4 sm:left-5 md:top-5 md:left-7', color: 'text-pink-200', dur: '5s', delay: '0.3s' },
      { Icon: ShoppingCart, pos: 'bottom-4 right-3 sm:bottom-5 sm:right-5 md:bottom-6 md:right-7', color: 'text-fuchsia-200', dur: '6.5s', delay: '0.6s' },
      { Icon: Package, pos: 'bottom-4 left-10 sm:bottom-5 sm:left-14 md:bottom-7 md:left-9', color: 'text-pink-200', dur: '5.5s', delay: '1.1s' },
    ],
    connectors: false,
    accentDot: 'bg-fuchsia-400',
  },
  MediSync: {
    base: 'from-blue-950 via-slate-900 to-slate-950',
    glowA: 'bg-blue-500/30',
    glowB: 'bg-indigo-400/20',
    ring: 'ring-blue-400/30',
    grid: 'rgba(147,197,253,0.2)',
    primary: { Icon: Pill, color: 'text-blue-300', glow: 'drop-shadow-[0_0_22px_rgba(147,197,253,0.6)]' },
    satellites: [
      { Icon: ShieldCheck, pos: 'top-3 left-3 sm:top-4 sm:left-5 md:top-5 md:left-7', color: 'text-blue-200', dur: '5s', delay: '0.2s' },
      { Icon: Package, pos: 'top-3 right-3 sm:top-4 sm:right-5 md:top-5 md:right-7', color: 'text-indigo-200', dur: '6s', delay: '0.9s' },
      { Icon: BarChart3, pos: 'bottom-4 left-8 sm:bottom-5 sm:left-10 md:bottom-6 md:left-8', color: 'text-blue-200', dur: '5.5s', delay: '0.5s' },
    ],
    connectors: false,
    accentDot: 'bg-blue-400',
  },
}

const particles = [
  { top: '14%', left: '18%', size: 3, dur: '4.2s', delay: '0s' },
  { top: '24%', left: '78%', size: 2, dur: '5.1s', delay: '0.6s' },
  { top: '68%', left: '12%', size: 2, dur: '4.6s', delay: '1.1s' },
  { top: '78%', left: '64%', size: 3, dur: '5.6s', delay: '0.3s' },
  { top: '46%', left: '88%', size: 2, dur: '4.9s', delay: '1.4s' },
  { top: '58%', left: '40%', size: 2, dur: '5.3s', delay: '0.8s' },
  { top: '10%', left: '52%', size: 2, dur: '4.4s', delay: '1.6s' },
]

// Used only to tone down the *decorative* extras (glows, particles, satellites,
// dashed connector lines). The core pulse rings + floating icon badge are
// intentionally excluded from this so they always keep looping.
const useReducedMotion = () => {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const handler = (e) => setReduced(e.matches)
    handler(mq)
    mq.addEventListener?.('change', handler)
    return () => mq.removeEventListener?.('change', handler)
  }, [])
  return reduced
}

const ProjectVisual = ({ title, label, accent, flipEven, active }) => {
  const cfg = illustrations[title]
  const reduced = useReducedMotion()
  if (!cfg) return null
  const Primary = cfg.primary.Icon

  const floatStyle = (dur, delay) =>
    reduced ? undefined : { animation: `pv-float-slow ${dur} ease-in-out ${delay} infinite` }

  const wiggleStyle = (dur, delay) =>
    reduced ? undefined : { animation: `pv-icon-wiggle ${dur} ease-in-out ${delay} infinite` }

  const roundingClasses = flipEven
    ? 'md:rounded-r-none md:rounded-l-2xl'
    : 'md:rounded-l-none md:rounded-r-2xl'

  return (
    <div
      className={`absolute inset-0 overflow-hidden flex items-center justify-center bg-gradient-to-br ${cfg.base} rounded-b-2xl ${roundingClasses} transition-all duration-700 ease-out ${
        active ? 'opacity-100 scale-100' : 'opacity-0 scale-[1.03]'
      }`}
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, ${cfg.grid} 1px, transparent 0)`,
          backgroundSize: '18px 18px',
        }}
      />

      <div
        aria-hidden="true"
        className={`absolute -top-10 -left-8 w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44 rounded-full blur-3xl ${cfg.glowA} transition-transform duration-700 ease-out group-hover:scale-110`}
        style={reduced ? undefined : { animation: 'pv-drift-a 9s ease-in-out infinite' }}
      />
      <div
        aria-hidden="true"
        className={`absolute -bottom-12 -right-6 w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-full blur-3xl ${cfg.glowB} transition-transform duration-700 ease-out group-hover:scale-110`}
        style={reduced ? undefined : { animation: 'pv-drift-b 11s ease-in-out infinite' }}
      />
      <div
        aria-hidden="true"
        className="hidden md:block absolute left-0 top-8 bottom-8 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent"
      />

      {particles.map((p, i) => (
        <span
          key={i}
          aria-hidden="true"
          className="absolute rounded-full bg-white/55"
          style={{
            top: p.top,
            left: p.left,
            width: p.size,
            height: p.size,
            animation: reduced ? undefined : `pv-twinkle ${p.dur} ease-in-out ${p.delay} infinite`,
          }}
        />
      ))}

      {cfg.connectors && (
        <svg
          aria-hidden="true"
          viewBox="0 0 400 260"
          className="absolute inset-0 w-full h-full opacity-50"
          preserveAspectRatio="xMidYMid slice"
        >
          <line
            x1="200"
            y1="130"
            x2="320"
            y2="55"
            stroke="rgba(110,231,183,0.6)"
            strokeWidth="1.2"
            strokeDasharray="4 5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-18"
              dur="2.4s"
              repeatCount="indefinite"
            />
          </line>
          <line
            x1="200"
            y1="130"
            x2="80"
            y2="205"
            stroke="rgba(94,234,212,0.55)"
            strokeWidth="1.2"
            strokeDasharray="4 5"
          >
            <animate
              attributeName="stroke-dashoffset"
              from="0"
              to="-18"
              dur="2.8s"
              repeatCount="indefinite"
            />
          </line>
        </svg>
      )}

      <div className="relative w-full h-full flex items-center justify-center px-10 sm:px-12">
        {/* Pulsing rings — always loop, never gated by reduced-motion */}
        <div
          className="absolute w-40 h-40 sm:w-48 sm:h-48 md:w-56 md:h-56 rounded-full border border-white/5"
          style={{ animation: 'pv-pulse-ring 4.5s ease-in-out infinite' }}
        />
        <div
          className="absolute w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-full border border-white/10"
          style={{ animation: 'pv-pulse-ring 4.5s ease-in-out 0.6s infinite' }}
        />

        {/* Floating icon badge — always loops too */}
        <div
          className={`relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-2xl sm:rounded-3xl bg-white/[0.07] backdrop-blur-xl border border-white/[0.14] shadow-[0_10px_40px_rgba(0,0,0,0.4)] ring-1 ${cfg.ring} transition-all duration-500 ease-out group-hover:scale-105 group-hover:-rotate-3`}
          style={{ animation: 'pv-float-y 5s ease-in-out infinite' }}
        >
          <Primary
            size={32}
            strokeWidth={1.5}
            className={`w-8 h-8 sm:w-9 sm:h-9 md:w-[46px] md:h-[46px] ${cfg.primary.color} ${cfg.primary.glow}`}
            style={reduced ? undefined : { animation: 'pv-icon-breathe 3.4s ease-in-out infinite' }}
          />
        </div>

        {cfg.satellites.map(({ Icon, pos, color, dur, delay }, i) => (
          <div
            key={i}
            className={`absolute ${pos} z-10 flex items-center justify-center w-9 h-9 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-lg sm:rounded-xl bg-white/[0.07] backdrop-blur-lg border border-white/[0.14] shadow-lg transition-transform duration-500 ease-out group-hover:scale-110`}
            style={floatStyle(dur, delay)}
          >
            <Icon
              size={16}
              strokeWidth={1.8}
              className={`w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-[19px] md:h-[19px] ${color}`}
              style={wiggleStyle(dur, delay)}
            />
          </div>
        ))}
      </div>

      <div
        className={`absolute bottom-3 sm:bottom-4 md:bottom-5 left-1/2 -translate-x-1/2 z-20 flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/[0.09] backdrop-blur-xl border border-white/[0.14] shadow-[0_8px_24px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-105 max-w-[calc(100%-1.5rem)]`}
      >
        <span className={`w-1.5 h-1.5 rounded-full ${cfg.accentDot} shadow-[0_0_8px_currentColor] shrink-0`} />
        <span className="font-display font-semibold text-[0.78rem] sm:text-[0.86rem] text-white tracking-[-0.01em] truncate">
          {label}
        </span>
      </div>
    </div>
  )
}

const Projects = () => {
  const sectionRef = useRef(null)
  const [visible, setVisible] = useState(false)
  const reduced = useReducedMotion()

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
    <section id="projects" ref={sectionRef} className="py-16 sm:py-20 md:py-28">
      <style>{`
        @keyframes pv-float-y {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-9px); }
        }
        @keyframes pv-float-slow {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-7px) rotate(4deg); }
        }
        @keyframes pv-icon-wiggle {
          0%, 100% { transform: rotate(-6deg) scale(1); }
          50% { transform: rotate(6deg) scale(1.08); }
        }
        @keyframes pv-icon-breathe {
          0%, 100% { transform: scale(1); opacity: 0.92; }
          50% { transform: scale(1.08); opacity: 1; }
        }
        @keyframes pv-twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.85; }
        }
        @keyframes pv-pulse-ring {
          0%, 100% { transform: scale(1); opacity: 0.6; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes pv-drift-a {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(10px, 8px) scale(1.08); }
        }
        @keyframes pv-drift-b {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-10px, -8px) scale(1.08); }
        }
        @keyframes pv-title-pulse {
          0%, 100% { transform: scale(1); opacity: 0.75; }
          50% { transform: scale(1.35); opacity: 1; }
        }
      `}</style>

      <div className="max-w-[1180px] mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-[640px] mx-auto mb-10 sm:mb-14 md:mb-16 text-center">
          <div className="inline-flex items-center gap-3 mb-4 sm:mb-5">
            <span className="w-6 sm:w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.68rem] sm:text-[0.72rem] text-blue-600 uppercase tracking-[0.18em] font-semibold">
              Projects
            </span>
            <span className="w-6 sm:w-8 h-px bg-blue-600" />
          </div>
          <h2 className="font-display tracking-[-0.025em] text-[clamp(1.6rem,5vw,2.4rem)] font-bold text-slate-900 mb-3 sm:mb-4 leading-[1.15]">
            Selected work
          </h2>
        </div>
        <div className="flex flex-col gap-5 sm:gap-6 md:gap-7">
          {projects.map((project, i) => {
            const isEven = i % 2 === 1
            return (
              <div
                key={project.title}
                className={`group relative bg-gradient-to-br from-white to-slate-50/60 border border-[#E2E8F0] rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 items-stretch transition-all duration-500 ease-out hover:-translate-y-1.5 hover:shadow-[0_28px_56px_-18px_rgba(15,23,42,0.22)] hover:border-blue-300 ${
                  visible || reduced ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: visible || reduced ? `${i * 120}ms` : '0ms',
                  transitionDuration: '700ms',
                }}
              >
                <div
                  className={`absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r ${project.accent} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  aria-hidden="true"
                />

                <div
                  aria-hidden="true"
                  className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${project.accent} opacity-0 group-hover:opacity-[0.06] blur-2xl transition-opacity duration-500`}
                />

                <div
                  className={`relative p-5 sm:p-7 md:p-9 flex flex-col justify-center ${
                    isEven ? 'md:order-2' : 'md:order-1'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-3 sm:mb-4 flex-wrap">
                    <span
                      className={`font-mono text-[0.75rem] font-bold text-white bg-gradient-to-br ${project.accent} w-8 h-8 rounded-lg flex items-center justify-center shrink-0 shadow-sm ring-1 ring-white/10`}
                    >
                      {project.index}
                    </span>
                    <span className="font-mono text-[#8A93A3] text-[0.7rem] sm:text-[0.74rem] uppercase tracking-[0.1em] font-medium">
                      {project.category}
                    </span>
                  </div>

                  <h3 className="font-display tracking-[-0.025em] text-[1.25rem] sm:text-[1.4rem] md:text-[1.5rem] text-slate-900 mb-2.5 sm:mb-3 flex items-center gap-2.5 leading-[1.25]">
                    <span
                      className={`w-2 h-2 rounded-full bg-gradient-to-br ${project.accent} shadow-[0_0_10px_currentColor] shrink-0`}
                      style={{ animation: 'pv-title-pulse 2.4s ease-in-out infinite' }}
                      aria-hidden="true"
                    />
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                      {project.title}
                    </span>
                  </h3>

                  <p className="text-[#5B6472] text-[0.9rem] sm:text-[0.96rem] leading-[1.65] sm:leading-[1.7] mb-4 sm:mb-5">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-4 sm:mb-5">
                    {project.features.map((feature) => (
                      <span
                        key={feature}
                        className="text-[0.75rem] sm:text-[0.8rem] px-2.5 py-1.5 sm:px-3 rounded-lg bg-[#F8FAFC] text-slate-700 font-medium border border-[#E2E8F0] transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-700 hover:-translate-y-0.5"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>

                  <div className="font-mono text-[0.75rem] sm:text-[0.8rem] text-blue-600 pt-3 sm:pt-4 border-t border-slate-100 flex items-center gap-2">
                    <span className="w-1 h-1 rounded-full bg-blue-400 shrink-0" />
                    <span className="leading-relaxed">{project.tech}</span>
                  </div>
                </div>
                <div
                  className={`relative h-full min-h-[220px] sm:min-h-[240px] md:min-h-[260px] ${
                    isEven ? 'md:order-1' : 'md:order-2'
                  }`}
                >
                  <ProjectVisual
                    title={project.title}
                    label={project.label}
                    accent={project.accent}
                    flipEven={isEven}
                    active={visible || reduced}
                  />
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Projects