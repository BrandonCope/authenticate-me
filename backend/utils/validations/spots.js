const { check } = require('express-validator');
const { handleValidationErrors } = require('../validation')

const userId = check('userId')
    .notEmpty()
    .withMessage('cannot be empty')
    .isInt({min:0});
const address = check('address')
    .notEmpty()
    .withMessage('cannot be empty');
const city = check('city')
    .notEmpty()
    .withMessage('cannot be empty');
const state = check('state')
    .notEmpty()
    .withMessage('cannot be empty');
const country = check('country')
    .notEmpty()
    .withMessage('cannot be empty');
const lat = check('lat')
    .notEmpty()
    .withMessage('cannot be empty');
const lng = check('lng')
    .notEmpty()
    .withMessage('cannot be empty');
const name = check('name')
    .notEmpty()
    .withMessage('cannot be empty');
const price = check('price')
    .notEmpty()
    .withMessage('cannot be empty');



exports.validateCreate = [
    userId,
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    price,
    handleValidationErrors
]

exports.validateUpdate = [
    address,
    city,
    state,
    country,
    lat,
    lng,
    name,
    price,
    handleValidationErrors
]
