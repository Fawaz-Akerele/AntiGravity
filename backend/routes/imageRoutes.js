const express = require('express');
const { images } = require('../data/mockData');
const router = express.Router();

// GET /api/images
router.get('/', (req, res) => {
    res.json(images);
});

module.exports = router;
