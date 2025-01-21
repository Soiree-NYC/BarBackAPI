const Joi = require('joi');

const spaceSchema = Joi.object({
  name: Joi.string().min(1).required(),
  type: Joi.string().min(1).required(),
  min_capacity: Joi.number().integer().optional().allow(null),
  max_capacity: Joi.number().integer().required(),
  size: Joi.string().min(1).required(),
  price: Joi.number().required(),
  description: Joi.string().optional().allow(null, ''),
  image: Joi.string().uri().optional().allow(null),
  venue_id: Joi.number().integer().required(),
});

module.exports = { spaceSchema };
