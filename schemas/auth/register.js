import joi from 'joi';

const schema = joi.object({
    email: joi.string().required().email({ minDomainSegments: 2 })
        .messages({
            'any.required': 'Email is required!!',
            'string.base': 'Email is required!!',
            'string.empty': 'Email is required!!',
            'string.email': 'Invalid format email!!'
        }),
    password: joi.string().required().min(8).alphanum()
        .messages({
            'any.required': 'Password is required!!',
            'string.base': 'Password is required!!',
            'string.empty': 'Password is required!!',
            'string.min': 'Password is too short!!',
            'string.alphanum': 'Password must be alphanum!!'
        }),
    name: joi.string().required().min(3)
        .messages({
            'string.base': 'Name is required!',
            'string.empty': 'Name is required!',
            'string.min': 'Name is too short!'
        }),
        lastName: joi.string().required().min(3)
        .messages({
            'string.base': 'Lastname is required!',
            'string.empty': 'Lastname is required!',
            'string.min': 'Lastname is too short!'
        })
})

export default schema;