import { useState, useEffect, useRef } from 'react'
import './Contact.css'

function Contact() {
    const [form, setForm] = useState({ name: '', email: '', message: '' })
    const [status, setStatus] = useState({ type: '', message: '' })
    const [sending, setSending] = useState(false)
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible')
                })
            },
            { threshold: 0.2 }
        )
        const elements = sectionRef.current?.querySelectorAll('.fade-in')
        elements?.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [])

    const handleSubmit = async (e) => {
        e.preventDefault()
        setSending(true)
        setStatus({ type: '', message: '' })

        try {
            const res = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(form)
            })
            const data = await res.json()

            if (res.ok) {
                setStatus({ type: 'success', message: data.message || 'Message sent successfully!' })
                setForm({ name: '', email: '', message: '' })
            } else {
                setStatus({ type: 'error', message: data.error || 'Failed to send message.' })
            }
        } catch {
            setStatus({ type: 'error', message: 'Could not connect to server. Please try again.' })
        } finally {
            setSending(false)
            setTimeout(() => setStatus({ type: '', message: '' }), 5000)
        }
    }

    return (
        <section className="contact" id="contact" ref={sectionRef}>
            <div className="container">
                <div className="fade-in">
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to defy gravity? Reach out to our team for collaborations, inquiries, or just to say hello.
                    </p>
                </div>

                <div className="contact-grid">
                    <div className="contact-info fade-in">
                        <div className="info-card glass">
                            <div className="info-icon">📍</div>
                            <h4>Location</h4>
                            <p>Orbital Station Alpha<br />Low Earth Orbit, Sector 7</p>
                        </div>
                        <div className="info-card glass">
                            <div className="info-icon">📡</div>
                            <h4>Communication</h4>
                            <p>signal@antigravity.tech<br />+1 (555) ZERO-G</p>
                        </div>
                        <div className="info-card glass">
                            <div className="info-icon">⏰</div>
                            <h4>Operating Hours</h4>
                            <p>24/7 — Gravity never sleeps,<br />and neither do we.</p>
                        </div>
                    </div>

                    <form className="contact-form glass fade-in" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                placeholder="Your name"
                                value={form.name}
                                onChange={e => setForm({ ...form, name: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                placeholder="your@email.com"
                                value={form.email}
                                onChange={e => setForm({ ...form, email: e.target.value })}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                rows="5"
                                placeholder="Tell us about your project..."
                                value={form.message}
                                onChange={e => setForm({ ...form, message: e.target.value })}
                                required
                            ></textarea>
                        </div>
                        <button type="submit" className="btn-neon submit-btn" disabled={sending}>
                            {sending ? '◌ Transmitting...' : '◆ Send Message'}
                        </button>

                        {status.message && (
                            <div className={`form-status ${status.type}`}>
                                {status.type === 'success' ? '✓' : '✕'} {status.message}
                            </div>
                        )}
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
