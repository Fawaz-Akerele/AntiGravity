import { useState, useEffect } from 'react'
import './Navbar.css'

function Navbar() {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const navLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Services', href: '#services' },
        { label: 'Gallery', href: '#gallery' },
        { label: 'Contact', href: '#contact' }
    ]

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
            <div className="navbar-container">
                <a href="#hero" className="navbar-logo">
                    <span className="logo-icon">◈</span>
                    <span className="logo-text">ANTI<span className="logo-accent">GRAVITY</span></span>
                </a>

                <ul className={`navbar-links ${menuOpen ? 'active' : ''}`}>
                    {navLinks.map(link => (
                        <li key={link.label}>
                            <a href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
                        </li>
                    ))}
                </ul>

                <button className="navbar-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
                    <span className={`hamburger ${menuOpen ? 'open' : ''}`}></span>
                </button>
            </div>
        </nav>
    )
}

export default Navbar
