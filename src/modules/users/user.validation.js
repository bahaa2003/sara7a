
  import Joi from "joi";

const singUpSchema = Joi.object({
  name: Joi.string().required(),
  password: Joi.string().required().min(6), //.pattern(/^[A-Z][a-z0-9]{3,30}$/),
  email: Joi.string().email().required(),
  age : Joi.number().integer().required().min(10), 
  repassword: Joi.ref("password"),
});

const singInSchema = Joi.object({
  password: Joi.string().required().min(6), //.pattern(/^[A-Z][a-z0-9]{3,30}$/),
  email: Joi.string().email().required(),
});

export { singUpSchema, singInSchema };
