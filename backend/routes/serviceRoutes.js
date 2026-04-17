const express = require('express');
const { services } = require('../data/mockData');
const router = express.Router();

const Service = require('../models/Service');

// GET /api/services
router.get('/', async (req, res) => {
  try {
    const services = await Service.find({});
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

module.exports = router;
