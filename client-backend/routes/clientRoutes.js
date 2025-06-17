const express = require('express');
const router = express.Router();
const Client = require('../models/Client');

// Create
router.post('/', async (req, res) => {
  try {
    const client = new Client(req.body);
    const saved = await client.save();
    res.json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to save client' });
  }
});

// Read all
router.get('/', async (req, res) => {
  try {
    const clients = await Client.find();
    res.json(clients);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch clients' });
  }
});

// Update
router.put('/:id', async (req, res) => {
  try {
    const updated = await Client.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update client' });
  }
});

// Delete
router.delete('/:id', async (req, res) => {
  try {
    await Client.findByIdAndDelete(req.params.id);
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete client' });
  }
});

module.exports = router;
