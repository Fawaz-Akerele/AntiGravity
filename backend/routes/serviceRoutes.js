const express = require('express');
const { services } = require('../data/mockData');
const router = express.Router();

// GET /api/services
router.get('/', (req, res) => {
    res.json(services);
});

module.exports = router;
