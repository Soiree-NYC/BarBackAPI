const Joi = require('joi');

const accessibilitySchema = Joi.object({
  client_music: Joi.boolean().required(),
  client_band: Joi.boolean().required(),
  client_dj: Joi.boolean().required(),
  noise_restriction: Joi.boolean().required(),
  wheelchair: Joi.boolean().required(),
  toilets: Joi.boolean().required(),
  step_free: Joi.boolean().required(),
  parking: Joi.boolean().required(),
  lift: Joi.boolean().required(),
  cargo_lift: Joi.boolean().required(),
  venue_id: Joi.number().integer().required(),
});

module.exports = { accessibilitySchema };
