const Joi = require('joi');

const pricingSchema = Joi.object({
  basic_price: Joi.number().required(),
  premium_price: Joi.number().required(),
  vip_price: Joi.number().required(),
  cleaning_fee: Joi.number().required(),
  gratuity_fee: Joi.number().integer().required(),
  corking_fee: Joi.number().required(),
  cold_storage_fee: Joi.number().required(),
  coat_check_fee: Joi.number().required(),
  venue_id: Joi.number().integer().required(),
});

module.exports = { pricingSchema };
