import useScrollReveal from '../hooks/useScrollReveal'

const timeline = [
  {
    date: '2024 - Present',
    role: 'Frontend Developer Intern',
    org: 'ZyraTech',
    desc: 'Developed responsive web interfaces, collaborated with design team, implemented modern UI/UX patterns, and optimized application performance.',
    tags: ['HTML/CSS', 'JavaScript', 'UI/UX'],
  },
  {
    date: '2024 - Present (Ongoing)',
    role: 'Python Developer Certification',
    org: 'Kiran Academy - Professional Training',
    desc: 'Comprehensive Python development training covering Django, Flask, REST APIs, database management, and backend best practices.',
    tags: ['Python', 'Django', 'Backend'],
  },
  {
    date: '2021 - 2024',
    role: 'B.Voc Software Development',
    org: 'University Education',
    desc: 'Specialized in software development with focus on web technologies, database management, and software engineering principles.',
    tags: ['Software Dev', 'Web Tech', 'Databases'],
  },
  {
    date: '2023 - Present',
    role: 'Self-Learning & Skill Development',
    org: 'Frontend & ML Exploration',
    desc: 'Building responsive web applications, exploring machine learning fundamentals, and working on personal projects to strengthen practical skills.',
    tags: ['Web Dev', 'ML Basics', 'Projects'],
  },
]

export default function Experience() {
  const ref = useScrollReveal()

  return (
    <section id="experience" className="py-24 bg-slate-900/30">
      <div className="max-w-3xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="section-tag">My Journey</span>
          <h2 className="section-title">Experience & Education</h2>
        </div>

        <div ref={ref} className="reveal relative pl-10">
          {/* Vertical line */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-400 to-cyan-600" />

          {timeline.map((item, i) => (
            <div key={i} className="relative mb-10 last:mb-0">
              {/* Dot */}
              <div className="absolute -left-6 top-1 w-4 h-4 rounded-full bg-cyan-400
                              border-4 border-slate-950 shadow-[0_0_12px_rgba(34,211,238,0.6)]" />

              <div className="glass-card hover:translate-x-2 transition-transform duration-300">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-cyan-400
                                 bg-cyan-400/10 border border-cyan-400/30 rounded-full mb-3">
                  {item.date}
                </span>
                <h3 className="text-lg font-semibold text-white mb-1">{item.role}</h3>
                <h4 className="text-cyan-400 font-medium mb-3">{item.org}</h4>
                <p className="text-slate-400 text-sm leading-relaxed mb-4">{item.desc}</p>
                <div className="flex gap-2 flex-wrap">
                  {item.tags.map((t) => <span key={t} className="tag-badge">{t}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
