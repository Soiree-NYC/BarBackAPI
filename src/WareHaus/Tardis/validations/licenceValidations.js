const Joi = require('joi');

const licenceSchema = Joi.object({
  liquor: Joi.boolean().required(),
  byob: Joi.boolean().required(),
  venue_id: Joi.number().integer().required(),
});

module.exports = { licenceSchema };
