const express = require('express');
const cors = require('cors');
const imageRoutes = require('./routes/imageRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const contactRoutes = require('./routes/contactRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
    origin: process.env.FRONTEND_URL || '*',
    methods: ['GET', 'POST'],
    credentials: true
}));
app.use(express.json());

// Routes
app.use('/api/images', imageRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/contact', contactRoutes);

// Health check
app.get('/api/health', (req, res) => {
    res.json({ status: 'ok', message: 'Anti-Gravity API is running 🚀' });
});

// Root route
app.get('/', (req, res) => {
    res.json({
        name: 'Anti-Gravity Technology API',
        version: '1.0.0',
        endpoints: ['/api/images', '/api/services', '/api/contact', '/api/health']
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`\n🚀 Anti-Gravity API Server running on http://localhost:${PORT}`);
    console.log(`📡 Endpoints:`);
    console.log(`   GET  /api/images`);
    console.log(`   GET  /api/services`);
    console.log(`   POST /api/contact`);
    console.log(`   GET  /api/health\n`);
});
