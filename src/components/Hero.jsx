import { useState, useEffect } from 'react'
import meImage from '../assets/ME.png'

const phrases = [
  'Frontend Developer',
  'Exploring Backend',
  'Learning Machine Learning',
  'Building Web Apps',
  'Problem Solver',
]

function useTypingEffect(phrases) {
  const [text, setText] = useState('')
  const [phraseIdx, setPhraseIdx] = useState(0)
  const [charIdx, setCharIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = phrases[phraseIdx]
    const speed = deleting ? 50 : charIdx === current.length ? 2000 : 100

    const timer = setTimeout(() => {
      if (!deleting) {
        setText(current.substring(0, charIdx + 1))
        if (charIdx + 1 === current.length) setDeleting(true)
        else setCharIdx((c) => c + 1)
      } else {
        setText(current.substring(0, charIdx - 1))
        if (charIdx - 1 === 0) {
          setDeleting(false)
          setPhraseIdx((i) => (i + 1) % phrases.length)
          setCharIdx(0)
        } else {
          setCharIdx((c) => c - 1)
        }
      }
    }, speed)

    return () => clearTimeout(timer)
  }, [charIdx, deleting, phraseIdx, phrases])

  return text
}

export default function Hero() {
  const typedText = useTypingEffect(phrases)

  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative">
      <div className="max-w-6xl mx-auto px-5 w-full">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-14">

          {/* Text */}
          <div className="flex-1 text-center md:text-left animate-[fadeInLeft_1s_ease-out]">
            <p className="text-cyan-400 text-lg font-medium mb-2">Hello, I'm</p>
            <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-3 leading-tight">
              Pooja Dengale
            </h1>
            <h2 className="text-2xl md:text-3xl text-slate-300 mb-5 min-h-[2.5rem]">
              <span className="text-cyan-400">{typedText}</span>
              <span className="animate-[blink_1s_infinite] text-cyan-400">|</span>
            </h2>
            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl mx-auto md:mx-0">
              I build responsive web applications and am expanding my expertise in backend development and machine learning.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start mb-8">
              <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' }) }} className="btn-primary">
                <span>View Projects</span>
                <i className="fas fa-folder-open" />
              </a>
              <a href="/download-cv" className="btn-outline">
                <span>Download Resume</span>
                <i className="fas fa-download" />
              </a>
            </div>

            <div className="flex gap-4 justify-center md:justify-start">
              <a href="https://github.com/pooja-dengale" target="_blank" rel="noreferrer" className="social-icon" aria-label="GitHub">
                <i className="fab fa-github" />
              </a>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="social-icon" aria-label="LinkedIn">
                <i className="fab fa-linkedin" />
              </a>
              <a href="mailto:dengalepooja8@gmail.com" className="social-icon" aria-label="Email">
                <i className="fas fa-envelope" />
              </a>
            </div>
          </div>

          {/* Image */}
          <div className="flex-1 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              {/* Glow */}
              <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl animate-pulse" />
              <img
                src={meImage}
                alt="Pooja Dengale"
                className="relative w-full h-full object-cover rounded-full border-4 border-cyan-400/30
                           shadow-[0_0_40px_rgba(34,211,238,0.3)] animate-[float_4s_ease-in-out_infinite] z-10"
              />
              {/* Floating cards */}
              <div className="absolute top-4 -right-8 z-20 flex items-center gap-2 px-4 py-3
                              bg-slate-900/90 backdrop-blur border border-cyan-400/30 rounded-2xl shadow-xl
                              animate-[float_3s_ease-in-out_infinite]">
                <i className="fas fa-code text-cyan-400 text-xl" />
                <span className="text-white font-semibold text-sm">Frontend Dev</span>
              </div>
              <div className="absolute bottom-4 -left-8 z-20 flex items-center gap-2 px-4 py-3
                              bg-slate-900/90 backdrop-blur border border-cyan-400/30 rounded-2xl shadow-xl
                              animate-[float_3s_ease-in-out_infinite_1.5s]">
                <i className="fas fa-brain text-cyan-400 text-xl" />
                <span className="text-white font-semibold text-sm">ML Enthusiast</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-70">
        <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-cyan-400 rounded-full animate-[scroll_2s_infinite]" />
        </div>
        <p className="text-slate-400 text-xs uppercase tracking-widest">Scroll Down</p>
      </div>

      <style>{`
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        @keyframes scroll {
          0% { opacity: 1; transform: translateY(0); }
          100% { opacity: 0; transform: translateY(12px); }
        }
      `}</style>
    </section>
  )
}
