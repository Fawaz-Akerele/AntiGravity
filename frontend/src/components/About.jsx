import { useEffect, useRef } from 'react'
import './About.css'

function About() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible')
                    }
                })
            },
            { threshold: 0.2 }
        )

        const elements = sectionRef.current?.querySelectorAll('.fade-in')
        elements?.forEach(el => observer.observe(el))

        return () => observer.disconnect()
    }, [])

    return (
        <section className="about" id="about" ref={sectionRef}>
            <div className="container">
                <div className="about-grid">
                    <div className="about-visual fade-in">
                        <div className="about-orb">
                            <div className="orb-core"></div>
                            <div className="orb-ring"></div>
                            <div className="orb-ring ring-2"></div>
                            <div className="orb-particles">
                                {[...Array(8)].map((_, i) => (
                                    <span key={i} className="orb-particle" style={{
                                        animationDelay: `${i * 0.5}s`,
                                        transform: `rotate(${i * 45}deg) translateX(80px)`
                                    }}></span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="about-content fade-in">
                        <span className="about-label">ABOUT US</span>
                        <h2 className="section-title" style={{ textAlign: 'left' }}>
                            Breaking Free From<br />Earth's Grasp
                        </h2>
                        <p className="about-text">
                            Founded in 2025, Anti-Gravity Technology is at the forefront of revolutionary
                            propulsion research. Our team of quantum physicists, aerospace engineers, and
                            visionary designers are committed to making gravity optional.
                        </p>
                        <p className="about-text">
                            Through decades of research into graviton manipulation, electromagnetic field
                            inversion, and quantum vacuum energy, we've developed proprietary technologies
                            that challenge everything we know about Newtonian physics.
                        </p>
                        <div className="about-features">
                            <div className="feature">
                                <span className="feature-icon">◆</span>
                                <div>
                                    <h4>Quantum Research</h4>
                                    <p>Manipulating gravitational fields at the quantum level</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">◆</span>
                                <div>
                                    <h4>Advanced Propulsion</h4>
                                    <p>Frictionless transport systems beyond conventional physics</p>
                                </div>
                            </div>
                            <div className="feature">
                                <span className="feature-icon">◆</span>
                                <div>
                                    <h4>Space Engineering</h4>
                                    <p>Building habitable environments in zero-gravity conditions</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About
