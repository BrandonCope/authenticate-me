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

router.put('/:id', spotValidations.validateUpdate, asyncHandler(async(req,res) => {
    const {
        id,
        userId,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        price,
    } = req.body;

    const editSpot = await Spot.findByPk(id);

    const spot = await editSpot.update({
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        price,
    })
    return res.json(spot)
}))

router.delete('/:spotId', asyncHandler(async(req,res) => {
    const {spotId} = req.params;
    const deleteSpot = await Spot.findByPk(spotId)

    deleteSpot.destroy();
    res.json({ message: 'success' })
}))

module.exports = router;
