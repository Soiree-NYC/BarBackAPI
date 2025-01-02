const express = require('express');
const { ConsumerUser } = require('./models/consumeruser');
const router = express.Router();

router.get('/', async (req, res) => {
  const user = await ConsumerUser.findAll();
  res.json(user);
});

router.get('/:id', async (req, res) => {
  const user = await ConsumerUser.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Venue not found' });
  res.json(user);
});

const {
  ConsumerUser,
} = require('../models');
const sequelize = require('../models/index');

router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { consumerUser } = req.body;
    const user = await ConsumerUser.create(consumerUser, { transaction });

    await transaction.commit();
    res.status(201).json(user);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: 'Something went wrong' });
  }
});


router.put('/:id', async (req, res) => {
  const user = await ConsumerUser.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'User not found' });
  await user.update(req.body);
  res.json(user);
});

router.delete('/:id', async (req, res) => {
  const user = await ConsumerUser.findByPk(req.params.id);
  if (!user) return res.status(404).json({ message: 'Venue not found' });
  await user.destroy();
  res.status(204).send();
});

module.exports = router;
