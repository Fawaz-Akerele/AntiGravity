const express = require('express');
const router = express.Router();

// GET /api/images
const Image = require('../models/Image');

// GET /api/images
router.get('/', async (req, res) => {
  try {
    const images = await Image.find({});
    res.json(images);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});

// Optional: GET /api/images/:id
router.get('/:id', async (req, res) => {
  try {
    const image = await Image.findById(req.params.id);
    if (!image) return res.status(404).json({ error: 'Image not found' });
    res.json(image);
  } catch (error) {
    res.status(500).json({ error: 'Server error' });
  }
});
module.exports = router;
