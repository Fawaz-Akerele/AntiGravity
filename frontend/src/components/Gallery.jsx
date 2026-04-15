import { useState, useEffect, useRef } from 'react'
import './Gallery.css'

function Gallery() {
    const [images, setImages] = useState([])
    const [filter, setFilter] = useState('all')
    const [lightbox, setLightbox] = useState(null)
    const sectionRef = useRef(null)

    useEffect(() => {
        fetch('https://antigravity-ethrgndra3fgcges.westcentralus-01.azurewebsites.net/api/images')
            .then(res => res.json())
            .then(data => setImages(data))
            .catch(() => {
                setImages([
                    { _id: '1', title: 'Zero Gravity Chamber', url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600', category: 'technology', description: 'Advanced zero-gravity simulation chamber' },
                    { _id: '2', title: 'Orbital Station', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600', category: 'space', description: 'Next-generation orbital research station' },
                    { _id: '3', title: 'Anti-Gravity Vehicle', url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600', category: 'vehicles', description: 'Prototype hovering transport vehicle' },
                    { _id: '4', title: 'Deep Space Exploration', url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600', category: 'space', description: 'Journey beyond the solar system' },
                    { _id: '5', title: 'Levitation Lab', url: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600', category: 'technology', description: 'Magnetic levitation research facility' },
                    { _id: '6', title: 'Nebula Research', url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600', category: 'space', description: 'Studying nebulae for anti-gravity particles' },
                    { _id: '7', title: 'Hover Craft Alpha', url: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=600', category: 'vehicles', description: 'First commercial hover craft model' },
                    { _id: '8', title: 'Gravity Wave Detector', url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600', category: 'technology', description: 'Ultra-sensitive gravitational wave detector' },
                    { _id: '9', title: 'Mars Colony', url: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600', category: 'space', description: 'Anti-gravity assisted Mars colonization' },
                    { _id: '10', title: 'Quantum Engine', url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600', category: 'technology', description: 'Quantum-powered anti-gravity engine prototype' },
                    { _id: '11', title: 'Space Walk', url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600', category: 'space', description: 'Astronaut experiencing zero gravity' },
                    { _id: '12', title: 'Flying City Concept', url: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=600', category: 'vehicles', description: 'Conceptual floating city design' }
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
            { threshold: 0.05 }
        )
        const elements = sectionRef.current?.querySelectorAll('.fade-in')
        elements?.forEach(el => observer.observe(el))
        return () => observer.disconnect()
    }, [images, filter])

    const categories = ['all', ...new Set(images.map(img => img.category))]
    const filtered = filter === 'all' ? images : images.filter(img => img.category === filter)

    return (
        <section className="gallery" id="gallery" ref={sectionRef}>
            <div className="container">
                <div className="fade-in">
                    <h2 className="section-title">Image Gallery</h2>
                    <p className="section-subtitle">
                        Explore visual documentation of our anti-gravity research and achievements
                    </p>
                </div>

                <div className="gallery-filters fade-in">
                    {categories.map(cat => (
                        <button
                            key={cat}
                            className={`filter-btn ${filter === cat ? 'active' : ''}`}
                            onClick={() => setFilter(cat)}
                        >
                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
                        </button>
                    ))}
                </div>

                <div className="gallery-grid">
                    {filtered.map((image, index) => (
                        <div
                            key={image._id}
                            className="gallery-item fade-in"
                            style={{ animationDelay: `${index * 0.05}s` }}
                            onClick={() => setLightbox(image)}
                        >
                            <img src={image.url} alt={image.title} loading="lazy" />
                            <div className="gallery-overlay">
                                <h4>{image.title}</h4>
                                <p>{image.description}</p>
                                <span className="gallery-badge">{image.category}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox && (
                <div className="lightbox" onClick={() => setLightbox(null)}>
                    <div className="lightbox-content" onClick={e => e.stopPropagation()}>
                        <button className="lightbox-close" onClick={() => setLightbox(null)}>✕</button>
                        <img src={lightbox.url?.replace('w=600', 'w=1200')} alt={lightbox.title} />
                        <div className="lightbox-info">
                            <h3>{lightbox.title}</h3>
                            <p>{lightbox.description}</p>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}

export default Gallery
