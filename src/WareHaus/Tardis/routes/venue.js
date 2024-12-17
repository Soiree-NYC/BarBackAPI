const express = require('express');
const { Venue } = require('./models/Venue');
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

const {
  Venue,
  CancellationPolicy,
  Catering,
  Hours,
  Licences,
  Parking,
  Pricing,
  Space,
} = require('../models');
const sequelize = require('../models/index');

router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { cancellation_policy, catering, hours, licences, parking, pricing, space, ...venueData } = req.body;
    const venue = await Venue.create(venueData, { transaction });

    if (cancellation_policy) {
      const policy = await CancellationPolicy.create(
        { ...cancellation_policy },
        { transaction }
      );
      await venue.update({ cancellation_policy_id: policy.policy_id }, { transaction });
    };

    if (catering) {
      await Catering.create(
        { ...catering, venue_id: venue.id },
        { transaction }
      );
    };

    if (hours) {
      await Hours.create(
        { ...hours, venue_id: venue.id },
        { transaction }
      );
    };

    if (licences) {
      await Licences.create(
        { ...licences, venue_id: venue.id },
        { transaction }
      );
    };

    if (parking) {
      await Parking.create(
        { ...parking, venue_id: venue.id },
        { transaction }
      );
    };

    if (pricing) {
      await Pricing.create(
        { ...pricing, venue_id: venue.id },
        { transaction }
      );
    };

    if (space) {
      await Space.create(
        { ...space, venue_id: venue.id },
        { transaction }
      );
    };

    await transaction.commit();
    res.status(201).json(venue);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
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
