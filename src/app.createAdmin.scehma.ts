import * as joi from 'joi';

export const createAdminSchema = joi.object({
  name: joi.string().required(),
  email: joi.string().required(),
  password: joi.string().required(),
  contact: joi.string(),
  exp: joi.number(),
});
