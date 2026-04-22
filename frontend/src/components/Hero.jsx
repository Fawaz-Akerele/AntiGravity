import './Hero.css'

function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Animated background particles */}
            <div className="hero-particles">
                {[...Array(20)].map((_, i) => (
                    <div key={i} className="particle" style={{
                        left: `${Math.random() * 100}%`,
                        top: `${Math.random() * 100}%`,
                        animationDelay: `${Math.random() * 5}s`,
                        animationDuration: `${3 + Math.random() * 4}s`
                    }}></div>
                ))}
            </div>

            {/* Floating objects */}
            <div className="floating-objects">
                <div className="floating-obj astronaut" aria-hidden="true">👨‍🚀</div>
                <div className="floating-obj planet" aria-hidden="true">🪐</div>
                <div className="floating-obj rocket" aria-hidden="true">🚀</div>
                <div className="floating-obj car" aria-hidden="true">🚗</div>
                <div className="floating-obj satellite" aria-hidden="true">🛸</div>
                <div className="floating-obj star1" aria-hidden="true">✦</div>
                <div className="floating-obj star2" aria-hidden="true">✧</div>
                <div className="floating-obj moon" aria-hidden="true">🌙</div>
            </div>

            {/* Orbit rings */}
            <div className="orbit-ring ring-1"></div>
            <div className="orbit-ring ring-2"></div>
            <div className="orbit-ring ring-3"></div>

            <div className="hero-content">
                <div className="hero-badge">⚡ DEFYING PHYSICS SINCE 2026</div>
                <h1 className="hero-title">
                    <span className="title-line">ANTI</span>
                    <span className="title-line accent">GRAVITY</span>
                    <span className="title-line small">TECHNOLOGY</span>
                </h1>
                <p className="hero-description">
                    Pioneering the future of transportation, space exploration, and human evolution
                    through revolutionary anti-gravity propulsion systems.
                </p>
                <div className="hero-buttons">
                    <a href="#gallery" className="btn-neon">Explore Gallery</a>
                    <a href="#about" className="btn-neon btn-outline">Learn More</a>
                </div>
                <div className="hero-stats">
                    <div className="stat">
                        <span className="stat-number">150+</span>
                        <span className="stat-label">Projects</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">42</span>
                        <span className="stat-label">Patents</span>
                    </div>
                    <div className="stat">
                        <span className="stat-number">∞</span>
                        <span className="stat-label">Possibilities</span>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="scroll-indicator">
                <div className="scroll-line"></div>
                <span>SCROLL</span>
            </div>
        </section>
    )
}

export default Hero
