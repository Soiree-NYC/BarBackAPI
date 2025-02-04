const Joi = require('joi');

const venueSchema = Joi.object({
  name: Joi.string().min(1).max(255).required(),
  description: Joi.string().min(1).required(),
  address1: Joi.string().min(1).required(),
  address2: Joi.string().optional().allow(null, ''),
  city: Joi.string().min(1).required(),
  state: Joi.string().min(1).required(),
  zip: Joi.string().min(1).required(),
  neighborhood: Joi.string().min(1).required(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
  email: Joi.string().email().required(),
  age_policy: Joi.boolean().required(),
  photos: Joi.array().items(Joi.string().uri()).required(),
  cancellation_policy_id: Joi.number().integer().required(),
  tags: Joi.array().items(Joi.string()).optional().allow(null),
  menuOptions: Joi.array().items(Joi.string()).optional().allow(null),
});

module.exports = { venueSchema };
