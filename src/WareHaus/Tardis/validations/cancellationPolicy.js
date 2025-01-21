const Joi = require('joi');

const cancellationPolicySchema = Joi.object({
  name: Joi.string().min(1).required(),
  description: Joi.string().min(1).required(),
});

module.exports = { cancellationPolicySchema };
