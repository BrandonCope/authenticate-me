const { check } = require('express-validator');
const { handleValidationErrors } = require('../validation')

const userId = check('userId')
.notEmpty()
.withMessage('cannot be empty')
.isInt({min:0});
const spotId = check('spotId')
.notEmpty()
.withMessage('spotId cannot be empty')
.isInt({min:0});
const firstName = check('firstName')
.notEmpty()
.withMessage('username cannot be empty')
const review = check('review')
.notEmpty()
.withMessage('review cannot be empty')

exports.validateCreate = [
    userId,
    spotId,
    firstName,
    review,
    handleValidationErrors
]

exports.validateUpdate = [
    userId,
    spotId,
    firstName,
    review,
    handleValidationErrors
]
