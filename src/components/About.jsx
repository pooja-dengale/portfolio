import useScrollReveal from '../hooks/useScrollReveal'

const cards = [
  {
    icon: 'fas fa-laptop-code',
    title: 'Frontend Development',
    desc: 'Building responsive and interactive user interfaces with HTML, CSS, and JavaScript.',
  },
  {
    icon: 'fas fa-server',
    title: 'Backend Learning',
    desc: 'Currently learning Python and Django to build robust server-side applications.',
  },
  {
    icon: 'fas fa-brain',
    title: 'ML Exploration',
    desc: 'Exploring machine learning concepts and AI fundamentals for future applications.',
  },
]

const stats = [
  { value: '3+', label: 'Projects Completed' },
  { value: '8+', label: 'Technologies' },
  { value: '1+', label: 'Year Learning' },
]

export default function About() {
  const ref = useScrollReveal()

  return (
    <section id="about" className="py-24">
      <div className="max-w-6xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="section-tag">Get To Know</span>
          <h2 className="section-title">About Me</h2>
        </div>

        <div ref={ref} className="reveal flex flex-col gap-12">
          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cards.map((card) => (
              <div key={card.title} className="glass-card text-center">
                <div className="w-16 h-16 mx-auto mb-5 flex items-center justify-center
                                bg-gradient-to-br from-cyan-400 to-cyan-500 rounded-full text-slate-900 text-2xl">
                  <i className={card.icon} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">{card.title}</h3>
                <p className="text-slate-400 leading-relaxed text-sm">{card.desc}</p>
              </div>
            ))}
          </div>

          {/* Bio */}
          <div className="max-w-3xl mx-auto text-center space-y-4 text-slate-300 text-lg leading-relaxed">
            <p>
              I'm a <span className="text-cyan-400 font-semibold">Frontend Developer</span> with a strong foundation in HTML, CSS, and JavaScript.
              I have hands-on experience building responsive websites and creating user-friendly interfaces that work seamlessly across all devices.
            </p>
            <p>
              Currently expanding my skill set with <span className="text-cyan-400 font-semibold">Python and Django</span>, aiming to become a
              well-rounded full-stack developer. I'm also deeply interested in{' '}
              <span className="text-cyan-400 font-semibold">Machine Learning</span> and actively exploring AI concepts.
            </p>
            <p>
              I'm passionate about continuous learning and problem-solving. Every project is an opportunity to grow.
            </p>
          </div>

          {/* Stats */}
          <div className="flex justify-center gap-16 flex-wrap">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-bold text-cyan-400">{s.value}</p>
                <p className="text-slate-400 text-sm mt-1">{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
