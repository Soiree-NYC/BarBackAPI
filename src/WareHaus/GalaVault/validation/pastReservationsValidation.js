const Joi = require('joi');

const pastReservationsSchema = Joi.object({
  id: Joi.number().integer().required(),
  host: Joi.string().min(3).max(255).required(),
  nextup_id: Joi.string().min(3).max(255).required(),
  stripe_id: Joi.string().min(3).max(255).required(),
  completion_date: Joi.date().max('now').default(() => new Date(), 'current date'),
  feedback: Joi.string().min(20).max(255).optional(),
  confirmed_guests: Joi.number().integer().required(),
  final_cost: Joi.number().integer().required(),
  invoice: Joi.object({
    drinks: Joi.array().items(
      Joi.object({
        name: Joi.string().min(1).max(255).required(),
        price: Joi.number().integer().min(0).required(),
      })
    ).required(),
    food: Joi.array().items(
      Joi.object({
        name: Joi.string().min(1).max(255).required(),
        price: Joi.number().integer().min(0).required(),
      })
    ).required(),
  }).required(),
  createdAt: Joi.date().default(() => new Date(), 'current date'),
  updatedAt: Joi.date().default(() => new Date(), 'current date'),
});

module.exports = { pastReservationsSchema };
