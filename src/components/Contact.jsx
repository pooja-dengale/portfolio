import { useState } from 'react'
import { sendContactMessage } from '../api/contact'
import useScrollReveal from '../hooks/useScrollReveal'

const contactInfo = [
  { icon: 'fas fa-envelope', label: 'Email', value: 'dengalepooja8@gmail.com', href: 'mailto:dengalepooja8@gmail.com' },
  { icon: 'fas fa-map-marker-alt', label: 'Location', value: 'India', href: null },
  { icon: 'fas fa-briefcase', label: 'Status', value: 'Available for opportunities', href: null },
]

const socials = [
  { icon: 'fab fa-github', href: 'https://github.com/pooja-dengale', label: 'GitHub' },
  { icon: 'fab fa-linkedin', href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: 'fas fa-envelope', href: 'mailto:dengalepooja8@gmail.com', label: 'Email' },
]

const initialForm = { name: '', email: '', subject: '', message: '' }

export default function Contact() {
  const ref = useScrollReveal()
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState(null) // { type: 'success'|'error', msg: string }
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus(null)
    try {
      const res = await sendContactMessage(form)
      setStatus({ type: 'success', msg: res.message || 'Message sent successfully!' })
      setForm(initialForm)
    } catch {
      setStatus({ type: 'error', msg: 'Failed to send message. Please try again.' })
    } finally {
      setLoading(false)
      setTimeout(() => setStatus(null), 5000)
    }
  }

  return (
    <section id="contact" className="py-24">
      <div className="max-w-5xl mx-auto px-5">
        <div className="text-center mb-16">
          <span className="section-tag">Get In Touch</span>
          <h2 className="section-title">Contact Me</h2>
        </div>

        <div ref={ref} className="reveal grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Info */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-3">Let's work together!</h3>
            <p className="text-slate-400 leading-relaxed mb-8">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>

            <div className="flex flex-col gap-5 mb-8">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-12 h-12 flex items-center justify-center rounded-full
                                  bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 text-lg flex-shrink-0">
                    <i className={item.icon} />
                  </div>
                  <div>
                    <p className="text-white font-medium">{item.label}</p>
                    {item.href
                      ? <a href={item.href} className="text-slate-400 hover:text-cyan-400 transition-colors text-sm">{item.value}</a>
                      : <p className="text-slate-400 text-sm">{item.value}</p>
                    }
                  </div>
                </div>
              ))}
            </div>

            <div className="flex gap-3">
              {socials.map((s) => (
                <a key={s.label} href={s.href} target="_blank" rel="noreferrer" className="social-icon" aria-label={s.label}>
                  <i className={s.icon} />
                </a>
              ))}
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="glass-card flex flex-col gap-5" noValidate>
            {[
              { name: 'name', type: 'text', placeholder: 'Your Name', icon: 'fas fa-user' },
              { name: 'email', type: 'email', placeholder: 'Your Email', icon: 'fas fa-envelope' },
              { name: 'subject', type: 'text', placeholder: 'Subject', icon: 'fas fa-tag' },
            ].map((field) => (
              <div key={field.name} className="relative">
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  value={form[field.name]}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3.5 pr-12 bg-slate-800/50 border border-cyan-400/20 rounded-xl
                             text-white placeholder-slate-500 text-sm
                             focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]
                             transition-all duration-300"
                />
                <i className={`${field.icon} absolute right-4 top-4 text-cyan-400 text-sm`} />
              </div>
            ))}

            <div className="relative">
              <textarea
                name="message"
                placeholder="Your Message"
                rows={5}
                value={form.message}
                onChange={handleChange}
                required
                className="w-full px-4 py-3.5 pr-12 bg-slate-800/50 border border-cyan-400/20 rounded-xl
                           text-white placeholder-slate-500 text-sm resize-y min-h-[120px]
                           focus:outline-none focus:border-cyan-400 focus:shadow-[0_0_15px_rgba(34,211,238,0.2)]
                           transition-all duration-300"
              />
              <i className="fas fa-comment absolute right-4 top-4 text-cyan-400 text-sm" />
            </div>

            <button type="submit" disabled={loading} className="btn-primary justify-center disabled:opacity-60 disabled:cursor-not-allowed">
              {loading ? (
                <><span>Sending...</span><i className="fas fa-spinner fa-spin" /></>
              ) : (
                <><span>Send Message</span><i className="fas fa-paper-plane" /></>
              )}
            </button>

            {status && (
              <p className={`text-center text-sm font-medium ${status.type === 'success' ? 'text-cyan-400' : 'text-red-400'}`}>
                {status.type === 'success' ? '✓' : '✗'} {status.msg}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
