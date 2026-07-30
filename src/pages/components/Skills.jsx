import {
  Code2,
  Server,
  Database,
  Wrench,
  Cloud
} from 'lucide-react'

const skillGroups = [
  {
    category: 'Frontend',
    icon: Code2,
    accent: 'from-blue-500 to-indigo-500',
    iconBg: 'bg-blue-50 text-blue-600',
    skills: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'TypeScript',
      'React',
      'React Native',
      'Bootstrap',
      'Tailwind CSS',
      'jQuery',
      'AJAX',
    ],
  },
  {
    category: 'Backend',
    icon: Server,
    accent: 'from-indigo-500 to-violet-500',
    iconBg: 'bg-indigo-50 text-indigo-600',
    skills: [
      'Node.js',
      'Express.js',
      'PHP',
      'REST APIs',
    ],
  },
  {
    category: 'Database',
    icon: Database,
    accent: 'from-cyan-500 to-blue-500',
    iconBg: 'bg-cyan-50 text-cyan-600',
    skills: [
      'MySQL',
      'MongoDB',
      'Oracle SQL',
      'Mongoose',
      'SQL',
      'Database Design',
    ],
  },
  {
    category: 'Tools',
    icon: Wrench,
    accent: 'from-violet-500 to-blue-500',
    iconBg: 'bg-violet-50 text-violet-600',
    skills: [
      'Git',
      'GitHub',
      'VS Code',
      'Postman',
      'WordPress',
      'Claude AI',
      'MySQL Workbench',
      'Toad for Oracle',
    ],
  },
  {
    category: 'Deployment',
    icon: Cloud,
    accent: 'from-sky-500 to-cyan-500',
    iconBg: 'bg-sky-50 text-sky-600',
    skills: [
      'cPanel',
      'Bluehost',
      'GoDaddy',
      'HostGator',
      'Domain & DNS Management',
      'Shared Hosting',
    ],
  },
]
const Skills = () => {
  return (
    <section id="skills" className="py-[104px]">
      <div className="max-w-[1180px] mx-auto px-8">
        {/* Section head */}
        <div className="max-w-[640px] mx-auto mb-14 text-center animate-fade-in-up">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="w-8 h-px bg-blue-600" />
            <span className="font-mono text-[0.72rem] text-blue-600 uppercase tracking-[0.16em] font-semibold">
              Skills &amp; Technologies
            </span>
            <span className="w-8 h-px bg-blue-600" />
          </div>
          <h2 className="font-display tracking-[-0.02em] text-[clamp(1.8rem,3vw,2.3rem)] font-bold text-slate-900 mb-3.5">
            The toolkit behind every build
          </h2>
        </div>

{/* Skills grid */}
<div className="space-y-5.5">
  {/* Row 1 — first 3 categories */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5.5">
    {skillGroups.slice(0, 3).map((group, i) => {
      const Icon = group.icon
      return (
        <div
          key={group.category}
          className="group relative bg-gradient-to-br from-white to-slate-50/60 border border-slate-200 rounded-2xl p-6.5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] hover:border-blue-200 animate-fade-in-up"
          style={{ animationDelay: `${i * 100}ms` }}
        >
          <div
            className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${group.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            aria-hidden="true"
          />
          <div
            className={`w-11 h-11 rounded-xl ${group.iconBg} flex items-center justify-center mb-4 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105`}
          >
            <Icon size={20} strokeWidth={2} />
          </div>
          <h4 className="font-mono text-[0.78rem] uppercase tracking-[0.06em] text-slate-900 font-semibold mb-4">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-[0.82rem] px-3 py-1.5 rounded-lg bg-[#F8FAFC] text-slate-700 font-medium border border-[#E2E8F0] transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )
    })}
  </div>

  {/* Row 2 — last 2 categories, centered */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:w-2/3 lg:mx-auto gap-5.5">
    {skillGroups.slice(3).map((group, i) => {
      const Icon = group.icon
      return (
        <div
          key={group.category}
          className="group relative bg-gradient-to-br from-white to-slate-50/60 border border-slate-200 rounded-2xl p-6.5 overflow-hidden transition-all duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_-15px_rgba(15,23,42,0.15)] hover:border-blue-200 animate-fade-in-up"
          style={{ animationDelay: `${(i + 3) * 100}ms` }}
        >
          <div
            className={`absolute top-0 left-6 right-6 h-0.5 bg-gradient-to-r ${group.accent} rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            aria-hidden="true"
          />
          <div
            className={`w-11 h-11 rounded-xl ${group.iconBg} flex items-center justify-center mb-4 transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:scale-105`}
          >
            <Icon size={20} strokeWidth={2} />
          </div>
          <h4 className="font-mono text-[0.78rem] uppercase tracking-[0.06em] text-slate-900 font-semibold mb-4">
            {group.category}
          </h4>
          <div className="flex flex-wrap gap-2">
            {group.skills.map((skill) => (
              <span
                key={skill}
                className="text-[0.82rem] px-3 py-1.5 rounded-lg bg-[#F8FAFC] text-slate-700 font-medium border border-[#E2E8F0] transition-all duration-200 hover:bg-blue-50 hover:border-blue-300 hover:text-blue-600 hover:-translate-y-0.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      )
    })}
  </div>
</div>
      </div>
    </section>
  )
}

export default Skills