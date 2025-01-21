const Joi = require('joi');

const cateringSchema = Joi.object({
  in_house: Joi.boolean().required(),
  external: Joi.boolean().required(),
  venue_id: Joi.number().integer().required(),
});

module.exports = { cateringSchema };
