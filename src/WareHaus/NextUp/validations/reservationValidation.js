const Joi = require('joi');

const reservationSchema = Joi.object({
  id: Joi.number().integer(),
  host: Joi.string().min(1).max(255).required(),
  date: Joi.date().max('now').required(),
  deposit_status: Joi.string().valid('PENDING', 'COMPLETED', 'FAILED').required(),
  status: Joi.string().valid('CONFIRMED', 'PENDING', 'CANCELED').required(),
  stripe_id: Joi.string().min(1).max(255).required(),
  venue_id: Joi.string().min(1).max(255).required(),
  deposit_amount: Joi.number().integer().min(0).required(),
  balance: Joi.number().integer().min(0).required(),
  total_cost: Joi.number().integer().min(0).required(),
  guests: Joi.number().integer().min(1).required(),
  special_requests: Joi.string().max(255).optional(),
  createdAt: Joi.date().default(() => new Date(), 'current date'),
  updatedAt: Joi.date().default(() => new Date(), 'current date'),
});

module.exports = { reservationSchema };
