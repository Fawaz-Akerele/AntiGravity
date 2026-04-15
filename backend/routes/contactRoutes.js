const express = require('express');
const router = express.Router();

// In-memory store for contact submissions
const contacts = [];

// POST /api/contact
router.post('/', (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    const contact = {
        id: contacts.length + 1,
        name,
        email,
        message,
        createdAt: new Date().toISOString()
    };

    contacts.push(contact);
    console.log('📩 New contact submission:', contact);

    res.status(201).json({ success: true, message: 'Message sent successfully! We will get back to you soon.' });
});

router.get('/:id', (req, res) => {
    const { id } = req.params;
    const contact = contacts.find(c => c.id === parseInt(id));

    if (!contact) {
        return res.status(404).json({ error: 'Contact not found' });
    }

    res.json(contact);
});

module.exports = router;
