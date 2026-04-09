import { useEffect, useRef, useState } from 'react'

const categories = [
  {
    icon: 'fas fa-code',
    title: 'Frontend Development',
    skills: [
      { name: 'HTML5', level: 70 },
      { name: 'CSS3', level: 65 },
      { name: 'JavaScript', level: 60 },
      { name: 'Responsive Design', level: 65 },
    ],
  },
  {
    icon: 'fas fa-server',
    title: 'Backend (Currently Learning)',
    skills: [
      { name: 'Python', level: 50 },
      { name: 'Django', level: 40 },
      { name: 'MySQL', level: 35 },
      { name: 'REST APIs', level: 40 },
    ],
  },
  {
    icon: 'fas fa-brain',
    title: 'Machine Learning (Exploring)',
    skills: [
      { name: 'ML Concepts', level: 25 },
      { name: 'Data Science Fundamentals', level: 30 },
      { name: 'NumPy & Pandas', level: 35 },
    ],
  },
]

function SkillBar({ name, level, animate }) {
  return (
    <div className="mb-5 last:mb-0">
      <div className="flex justify-between mb-2">
        <span className="text-slate-300 font-medium text-sm">{name}</span>
        <span className="text-cyan-400 font-semibold text-sm">{level}%</span>
      </div>
      <div className="h-2.5 bg-slate-800 rounded-full overflow-hidden">
        <div
          className="skill-bar-fill"
          style={{ width: animate ? `${level}%` : '0%' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const [animate, setAnimate] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="skills" className="py-24 bg-slate-900/30">
      <div className="max-w-4xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="section-tag">What I Know</span>
          <h2 className="section-title">My Skills</h2>
        </div>

        <div ref={ref} className="flex flex-col gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="glass-card">
              <h3 className="flex items-center gap-3 text-xl font-semibold text-white mb-6">
                <i className={`${cat.icon} text-cyan-400 text-2xl`} />
                {cat.title}
              </h3>
              {cat.skills.map((skill) => (
                <SkillBar key={skill.name} {...skill} animate={animate} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
