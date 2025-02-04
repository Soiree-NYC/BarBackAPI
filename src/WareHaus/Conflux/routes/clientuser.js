const express = require('express');
const { ClientUser } = require('./models/');
const { clientUserSchema } = require('../validation/clientUserValidation');
const sequelize = require('../models/index');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const users = await ClientUser.findAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while fetching users' });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const user = await ClientUser.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: `User not found with id ${req.params.id}` });
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while fetching ${req.params.id}` });
  }
});

router.post('/', async (req, res) => {
  const transaction = await sequelize.transaction();
  try {
    const { error, value } = clientUserSchema.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await clientUser.create(value, { transaction });
    await transaction.commit();

    res.status(201).json(user);
  } catch (error) {
    await transaction.rollback();
    console.error(error);
    res.status(500).json({ error: 'Something went wrong while creating user' });
  }
});

router.put('/:id', async (req, res) => {
  try {
    const { error, value } = clientUserSchema.validate(req.body, { allowUnknown: true });
    if (error) return res.status(400).json({ error: error.details[0].message });

    const user = await ClientUser.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: `User not found with id ${req.params.id}` });

    await user.update(value);
    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while updating ${req.params.id}` });
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const user = await ClientUser.findByPk(req.params.id);
    if (!user) return res.status(404).json({ message: 'User not found' });

    await user.destroy();
    res.json({ message: `User with id ${req.params.id} deleted successfully`, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: `Something went wrong while deleting ${req.params.id}` });
  }
});

module.exports = router;
