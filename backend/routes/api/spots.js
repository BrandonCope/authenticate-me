const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth')

const { Spot } = require('../../db/models')

const spotValidations = require('../../utils/validations/spots')

router.get('/', asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    // const images = await Image.findAll();
    // console.log(spots)
    return res.json(spots)
}))

router.post('/', restoreUser, spotValidations.validateCreate, asyncHandler(async(req, res) => {
    const spot = await Spot.create(req.body);
    res.json(spot)
}))

router.put('/:spotId', restoreUser, spotValidations.validateUpdate, asyncHandler(async(req,res) => {
    const {spotId} = req.params;


    const editSpot = await Spot.findByPk(spotId);

    const spot = await editSpot.update(req.body)
    return res.json(spot)
}))

router.delete('/:spotId', asyncHandler(async(req,res) => {
    const {spotId} = req.params;
    const deleteSpot = await Spot.findByPk(spotId)
    await deleteSpot.destroy();
    res.json({ message: 'success' })
}))

module.exports = router;
