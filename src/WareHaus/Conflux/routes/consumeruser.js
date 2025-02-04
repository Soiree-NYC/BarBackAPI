const express = require('express');
const { ConsumerUser } = require('./models/');
const { consumerUserSchema } = require('../validation/consumerUserValidation');
const sequelize = require('../models/index');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const user = await ConsumerUser.findAll();
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while fetching users` });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await ConsumerUser.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while fetching the user: ${req.params.id}`});
  }
});

router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { error, value } = consumerUserSchema.validate(req.body, { abortEarly: false });
    if (error) {
      await transaction.rollback();
      return res.status(400).json({ errors: error.details.map(e => e.message) });
    };

    const user = await ConsumerUser.create(value, { transaction });
    await transaction.commit();
    res.status(201).json(user);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: `Something went wrong while creating the user.` });
  }
});

router.put('/:id', async (req, res) => {
  const transaction  = await sequelize.transaction();
  try {
    const user = await ConsumerUser.findByPk(req.params.id);
    if (!user) {
      await transaction.rollback();
      return res.status(400).json({ errors: error.details.map(e => e.message) });
    }

    const { error, value } = consumerUserSchema.validate(req.body, { abortEarly: false });
    if (error) {
      await transaction.rollback();
      return res.status(404).json({ message: `User not found.` });
    };

    await user.update(value, { transaction });
    await transaction.commit();
    res.json(user);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: `Something went wrong while updating the user: ${req.params.id}` });
  }
});

router.delete('/:id', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const user = await ConsumerUser.findByPk(req.params.id);
    if (!user) {
      await transaction.rollback();
      return res.status(404).json({ message: 'User not found' });
    }

    await user.destroy({ transaction });
    await transaction.commit();
    res.status(204).send();
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: `Something went wrong while deleting the user: ${req.params.id}.` });
  }
});

module.exports = router;
