const express = require('express');
const { Reservation } = require('./models');
const { reservationSchema } = require('../validations/reservationValidation');
const sequelize = require('../models/index');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const reservations = await Reservation.findAll();
    res.json(reservations);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while fetching reservations' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: `Reservation not found with id ${req.params.id}` });
    res.json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while fetching ${req.params.id}` });
  }
});

router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { error, value } = reservationSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const reservation = await Reservation.create(value, { transaction });

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
    const { error, value } = reservationSchema.validate(req.body, { allowUnknown: true });
    if (error) return res.status(400).json({ error: error.details[0].message });

    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) return res.status(404).json({ message: `Reservation not found with id ${req.params.id}` });

    await user.update(value);
    res.json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while updating ${req.params.id}` });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const reservation = await Reservation.findByPk(req.params.id);
    if (!reservation) return res.status(404).json({ message: 'Reservation not found' });
    await user.destroy();
    res.status(204).send();
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while deleting ${req.params.id}` });
  }
});

module.exports = router;
