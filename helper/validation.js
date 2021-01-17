const Joi = require('@hapi/joi')
const regSchema_valid = Joi.object({
    account:Joi.string().email().lowercase().required(),
    password:Joi.string().min(8).required(),
    gender:Joi.string().required(),
    birthdate:Joi.date().required(),
})

const loginSchema_valid = Joi.object({
    account:Joi.string().email().lowercase().required(),
    password:Joi.string().min(6).required(),
})

module.exports = { regSchema_valid , loginSchema_valid}