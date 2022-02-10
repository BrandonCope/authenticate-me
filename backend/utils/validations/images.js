const { check } = require('express-validator');
const { handleValidationErrors } = require('../validation')

const userId = check('userId')
    .notEmpty()
    .withMessage('cannot be empty')
    .isInt({min:0});
const url = check('url')
    .notEmpty()
    .withMessage('cannot be empty')
    
exports.validateCreate = [
    userId,
    url
]
