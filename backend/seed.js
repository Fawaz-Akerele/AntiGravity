// backend/seed.js
require('dotenv').config();
const mongoose = require('mongoose');
const Image = require('./models/Image');
const Service = require('./models/Service');

// Sample data (same as yours)
const images = [
  { id: 1, title: 'Zero Gravity Chamber', url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa?w=600', category: 'technology', description: 'Advanced zero-gravity simulation chamber' },
  { id: 2, title: 'Orbital Station', url: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600', category: 'space', description: 'Next-generation orbital research station' },
  { id: 3, title: 'Anti-Gravity Vehicle', url: 'https://images.unsplash.com/photo-1614728263952-84ea256f9679?w=600', category: 'vehicles', description: 'Prototype hovering transport vehicle' },
  { id: 4, title: 'Deep Space Exploration', url: 'https://images.unsplash.com/photo-1462331940025-496dfbfc7564?w=600', category: 'space', description: 'Journey beyond the solar system' },
  { id: 5, title: 'Levitation Lab', url: 'https://images.unsplash.com/photo-1535223289827-42f1e9919769?w=600', category: 'technology', description: 'Magnetic levitation research facility' },
  { id: 6, title: 'Nebula Research', url: 'https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600', category: 'space', description: 'Studying nebulae for anti-gravity particles' },
  { id: 7, title: 'Hover Craft Alpha', url: 'https://images.unsplash.com/photo-1581822261290-991b38693d1b?w=600', category: 'vehicles', description: 'First commercial hover craft model' },
  { id: 8, title: 'Gravity Wave Detector', url: 'https://images.unsplash.com/photo-1504893524553-b855bce32c67?w=600', category: 'technology', description: 'Ultra-sensitive gravitational wave detector' },
  { id: 9, title: 'Mars Colony', url: 'https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?w=600', category: 'space', description: 'Anti-gravity assisted Mars colonization' },
  { id: 10, title: 'Quantum Engine', url: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=600', category: 'technology', description: 'Quantum-powered anti-gravity engine prototype' },
  { id: 11, title: 'Space Walk', url: 'https://images.unsplash.com/photo-1454789548928-9efd52dc4031?w=600', category: 'space', description: 'Astronaut experiencing zero gravity in space' },
  { id: 12, title: 'Flying City Concept', url: 'https://images.unsplash.com/photo-1534996858221-380b92700493?w=600', category: 'vehicles', description: 'Conceptual floating city design' }
];

const services = [
  { id: 1, title: 'Zero-G Research', description: 'Cutting-edge research into gravitational field manipulation and zero-gravity environments for industrial and scientific applications.', icon: '🔬' },
  { id: 2, title: 'Hover Transport', description: 'Development of frictionless hover-based transportation systems for personal and commercial use, powered by anti-gravity propulsion.', icon: '🚗' },
  { id: 3, title: 'Space Colonization', description: 'Engineering habitable environments in space using anti-gravity technology to simulate Earth-like conditions on other planets.', icon: '🪐' },
  { id: 4, title: 'Quantum Propulsion', description: 'Next-generation spacecraft propulsion systems leveraging quantum anti-gravity fields for faster-than-light travel research.', icon: '🚀' },
  { id: 5, title: 'Gravity Shielding', description: 'Protective gravity-manipulation shields for deep-space missions, deflecting micro-meteorites and cosmic radiation.', icon: '🛡️' },
  { id: 6, title: 'Levitation Systems', description: 'Commercial and industrial levitation platforms for heavy-lift construction, warehouse logistics, and entertainment.', icon: '⚡' }
];

const seedDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    // Clear existing data
    await Image.deleteMany({});
    await Service.deleteMany({});

    // Insert sample data
    await Image.insertMany(images);
    await Service.insertMany(services);

    console.log('Database seeded successfully!');
    process.exit();
  } catch (error) {
    console.error('Error seeding database:', error);
    process.exit(1);
  }
};

seedDB();