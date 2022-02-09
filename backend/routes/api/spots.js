const router = require('express').Router();
const asyncHandler = require('express-async-handler');

const { Spot } = require('../../db/models')

const spotValidations = require('../../utils/validations/spots')

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    // const images = await Image.findAll();
    // console.log(spots)
    return res.json(spots)
}))

router.post('/', spotValidations.validateCreate, asyncHandler(async(req, res) => {
    const spot = await Spot.create(req.body);
    res.json(spot)
}))

module.exports = router;
