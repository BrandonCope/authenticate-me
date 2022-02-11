const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { restoreUser } = require('../../utils/auth')

const { Spot, Image } = require('../../db/models')

const spotValidations = require('../../utils/validations/spots')

router.get('/', restoreUser, asyncHandler(async (req, res) => {
    const spots = await Spot.findAll();
    // const images = await Image.findAll();
    // const userId = req.user.id;
    // console.log(userId)
    // console.log(spots)
    return res.json(spots)
}))

router.get('/:id(\\d+)', asyncHandler(async (req, res) => {
    const {id} = req.params
    const spots = await Spot.findByPk(id);
    const images = await Image.findAll();
    // console.log(spots)
    return res.json(spots)
}))

router.post('/', restoreUser, spotValidations.validateCreate, asyncHandler(async(req, res) => {
    const userId = req.user.id;
    const spot = await Spot.create(req.body);
    res.json(spot)
}))

router.put('/:id(\\d+)', restoreUser, spotValidations.validateUpdate, asyncHandler(async(req,res) => {
    const {id} = req.params
    const {
        url1,
        url2,
        url3,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        price,} = req.body
    const editSpot = await Spot.findByPk(id);
    editSpot.set({
        url1,
        url2,
        url3,
        address,
        city,
        state,
        country,
        lat,
        lng,
        name,
        price,})
    await editSpot.save()
    return res.json(editSpot)
}))

router.delete('/:spotId', asyncHandler(async(req,res) => {
    const {spotId} = req.params;
    const deleteSpot = await Spot.findByPk(spotId)
    await deleteSpot.destroy();
    res.json({ message: 'success' })
}))

module.exports = router;
