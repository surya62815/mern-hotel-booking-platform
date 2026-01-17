const express = require('express');
const router = express.Router();

// Get all hotels
router.get('/', (req, res) => {
  res.json([{ id: 1, name: 'Grand Hotel', city: 'Paris', price: 200 }]);
});

// Get hotel by ID
router.get('/:id', (req, res) => {
  res.json({ id: req.params.id, name: 'Sample Hotel', description: 'Luxury hotel' });
});

module.exports = router;