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
const review = check('review')
.notEmpty()
.withMessage('cannot be empty')

exports.validateCreate = [
    userId,
    spotId,
    review,
    handleValidationErrors
]

exports.validateUpdate = [
    userId,
    spotId,
    review,
    handleValidationErrors
]
