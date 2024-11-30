const express = require('express');
const { Venue } = require('../models/venue');
const router = express.Router();

router.get('/', async (req, res) => {
  const venues = await Venue.findAll();
  res.json(venues);
});

router.get('/:id', async (req, res) => {
  const venue = await Venue.findByPk(req.params.id);
  if (!venue) return res.status(404).json({ message: 'Venue not found' });
  res.json(venue);
});

router.post('/', async (req, res) => {
  const venue = await Venue.create(req.body);
  res.status(201).json(venue);
});

router.put('/:id', async (req, res) => {
  const venue = await Venue.findByPk(req.params.id);
  if (!venue) return res.status(404).json({ message: 'Venue not found' });
  await venue.update(req.body);
  res.json(venue);
});

router.delete('/:id', async (req, res) => {
  const venue = await Venue.findByPk(req.params.id);
  if (!venue) return res.status(404).json({ message: 'Venue not found' });
  await venue.destroy();
  res.status(204).send();
});

module.exports = router;
