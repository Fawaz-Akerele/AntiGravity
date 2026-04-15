import { useState, useEffect, useRef } from 'react'
import './Services.css'

function Services() {
    const [services, setServices] = useState([])
    const sectionRef = useRef(null)

    useEffect(() => {
        fetch('https://antigravity-ethrgndra3fgcges.westcentralus-01.azurewebsites.net/api/services')
            .then(res => res.json())
            .then(data => setServices(data))
            .catch(() => {
                // Fallback if backend not running
                setServices([
                    { _id: '1', title: 'Zero-G Research', description: 'Cutting-edge research into gravitational field manipulation and zero-gravity environments for industrial and scientific applications.', icon: '🔬' },
                    { _id: '2', title: 'Hover Transport', description: 'Development of frictionless hover-based transportation systems for personal and commercial use.', icon: '🚗' },
                    { _id: '3', title: 'Space Colonization', description: 'Engineering habitable environments in space using anti-gravity technology.', icon: '🪐' },
                    { _id: '4', title: 'Quantum Propulsion', description: 'Next-generation spacecraft propulsion systems leveraging quantum anti-gravity fields.', icon: '🚀' },
                    { _id: '5', title: 'Gravity Shielding', description: 'Protective gravity-manipulation shields for deep-space missions.', icon: '🛡️' },
                    { _id: '6', title: 'Levitation Systems', description: 'Commercial and industrial levitation platforms for heavy-lift construction.', icon: '⚡' }
                ])
            })
    }, [])

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) entry.target.classList.add('visible')
                })
            },
            { threshold: 0.1 }
        )
        const elements = sectionRef.current?.querySelectorAll('.fade-in')
        elements?.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [services])

    return (
        <section className="services" id="services" ref={sectionRef}>
            <div className="container">
                <div className="fade-in">
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Pioneering solutions that push the boundaries of physics and engineering
                    </p>
                </div>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <div
                            key={service._id}
                            className="service-card glass fade-in"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-desc">{service.description}</p>
                            <div className="service-glow"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Services
