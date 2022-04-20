const { check } = require('express-validator');
const { handleValidationErrors } = require('../validation')

const spotId = check('spotId')
.notEmpty()
.withMessage('spotId cannot be empty')
.isInt({min:0})
const userId = check('userId')
.notEmpty()
.withMessage('Please login to book a stay.')
.isInt({min:0})
const startDate = check('startDate')
.notEmpty()
.withMessage('Start date is required.')
const endDate = check('endDate')
.notEmpty()
.withMessage('End date is required.')

exports.validateCreate = [
    spotId,
    userId,
    startDate,
    endDate,
    handleValidationErrors
]

exports.validateUpdate = [
    startDate,
    endDate,
    handleValidationErrors
]
