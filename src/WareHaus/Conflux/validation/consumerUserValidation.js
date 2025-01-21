const Joi = require('joi');

const consumerUserSchema = Joi.object({
  id: Joi.number().integer().positive().required(),
  name: Joi.string().min(3).max(255).required(),
  email: Joi.string().email().required(),
  company: Joi.string().min(3).max(255).optional(),
  phone: Joi.string().pattern(/^\+?[1-9]\d{1,14}$/).required(),
  verification: Joi.object({
    push:  Joi.boolean(),
    email: Joi.boolean(),
    phone: Joi.boolean(),
    sms:   Joi.boolean(),
  }).default({ push: false, email: true, sms: false }),
  notification_preferences: Joi.object({
    push:  Joi.boolean(),
    email: Joi.boolean(),
    phone: Joi.boolean(),
    sms:   Joi.boolean(),
  }).default({ push: true, email: true, phone: true, sms: true }),
  account_status: Joi.string().valid('active', 'inactive', 'suspended').default('active'),
  last_login: Joi.date().default(() => new Date(), 'current date'),
  profile_picture: Joi.string().uri().optional(),
  createdAt: Joi.date().default(() => new Date(), 'current date'),
  updatedAt: Joi.date().default(() => new Date(), 'current date'),
});

module.exports = { consumerUserSchema };
