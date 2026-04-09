import useScrollReveal from '../hooks/useScrollReveal'

const projects = [
  {
    title: 'Expense Tracker',
    desc: 'Full-featured expense tracking app built with Django. Track income, expenses, categories, and visualize spending patterns with charts.',
    tags: ['Django', 'Python', 'SQLite'],
    github: 'https://github.com/pooja-dengale/expense-tracker-django-',
    live: 'https://github.com/pooja-dengale/expense-tracker-django-',
    gradient: 'from-cyan-400/20 to-blue-500/20',
  },
  {
    title: 'Todo Application',
    desc: 'Interactive todo list with add, edit, delete, and mark-complete features. Clean UI with local storage persistence.',
    tags: ['JavaScript', 'HTML', 'CSS'],
    github: 'https://github.com/pooja-dengale/Todo-app',
    live: 'https://github.com/pooja-dengale/Todo-app',
    gradient: 'from-purple-400/20 to-cyan-400/20',
  },
  {
    title: 'Portfolio Website',
    desc: 'Modern, responsive portfolio built with Flask featuring glassmorphism design, smooth animations, contact form, and production-ready deployment.',
    tags: ['Flask', 'Python', 'CSS'],
    github: 'https://github.com/pooja-dengale/portfolio',
    live: 'https://github.com/pooja-dengale/portfolio',
    gradient: 'from-emerald-400/20 to-cyan-400/20',
  },
]

function ProjectCard({ title, desc, tags, github, live, gradient }) {
  return (
    <div className="glass-card group flex flex-col">
      {/* Thumbnail */}
      <div className={`h-44 rounded-xl mb-5 bg-gradient-to-br ${gradient} relative overflow-hidden flex items-center justify-center`}>
        <i className="fas fa-code text-cyan-400/40 text-6xl" />
        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-slate-950/90 flex items-center justify-center gap-5
                        opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <a href={live} target="_blank" rel="noreferrer"
             className="w-12 h-12 flex items-center justify-center rounded-full
                        bg-gradient-to-br from-cyan-400 to-cyan-500 text-slate-900 text-lg
                        hover:scale-110 transition-transform"
             aria-label={`Live demo of ${title}`}>
            <i className="fas fa-external-link-alt" />
          </a>
          <a href={github} target="_blank" rel="noreferrer"
             className="w-12 h-12 flex items-center justify-center rounded-full
                        bg-gradient-to-br from-cyan-400 to-cyan-500 text-slate-900 text-lg
                        hover:scale-110 transition-transform"
             aria-label={`GitHub repo for ${title}`}>
            <i className="fab fa-github" />
          </a>
        </div>
      </div>

      <div className="flex gap-2 flex-wrap mb-3">
        {tags.map((t) => <span key={t} className="tag-badge">{t}</span>)}
      </div>
      <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
      <p className="text-slate-400 text-sm leading-relaxed flex-1">{desc}</p>
    </div>
  )
}

export default function Projects() {
  const ref = useScrollReveal()

  return (
    <section id="projects" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="section-tag">My Work</span>
          <h2 className="section-title">Featured Projects</h2>
        </div>

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.map((p) => <ProjectCard key={p.title} {...p} />)}
        </div>
      </div>
    </section>
  )
}
