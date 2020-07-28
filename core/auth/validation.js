const Joi = require('@hapi/joi');


const registerValidation = (body) => {
    const schema = Joi.object({
        name: Joi.string()
            .alphanum()
            .min(3)
            .max(30)
            .required(),

        password: Joi.string()
            .min(8)
            .max(30),

        email: Joi.string()
            .email(),
    });

    const { error } = schema.validate(body);
    if (error) {
        return error.details[0].message;
    }
}

const loginValidation = (body) => {
    const schema = Joi.object({
        password: Joi.string()
            .min(8)
            .max(30),

        email: Joi.string()
            .email(),
    });

    const { error } = schema.validate(body);
    if (error) {
        return error.details[0].message;
    }
}

module.exports = { registerValidation, loginValidation };