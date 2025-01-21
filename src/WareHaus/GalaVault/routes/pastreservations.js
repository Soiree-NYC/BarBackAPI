const express = require('express');
const { PastReservations } = require('./models/');
const { pastReservationsSchema } = require('../validation/pastReservationsValidation');
const sequelize = require('../models/index');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reservations = await PastReservations.findAll();
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while fetching reservations' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const reservations = await PastReservations.findByPk(req.params.id);
    if (!reservations) return res.status(404).json({ message: `Reservation not found with id ${req.params.id}` });
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while fetching ${req.params.id}` });
  }
});

router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { error, value } = pastReservationsSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const reservation = await PastReservations.create(value, { transaction });

    await transaction.commit();
    res.status(201).json(reservation);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while creating reservation' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { error, value } = pastReservationsSchema.validate(req.body, { allowUnknown: true });
    if (error) return res.status(400).json({ error: error.details[0].message });

    const reservation = await PastReservations.findByPk(req.params.id);
    if (!reservation) return res.status(404).json({ message: `reservation not found with id ${req.params.id}` });

    await reservation.update(value);
    res.json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while updating ${req.params.id}` });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const reservation = await PastReservations.findByPk(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'reservation not found' });

    await reservation.destroy();
    res.json({ message: `reservation with id ${req.params.id} deleted successfully`, reservation });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while deleting ${req.params.id}` });
  }
});

module.exports = router;
