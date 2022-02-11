const router = require('express').Router();
const asyncHandler = require('express-async-handler');
const { restoreUser, requireAuth } = require('../../utils/auth')

const { Review } = require('../../db/models')
const reviewValidations = require('../../utils/validations/reviews')

router.get('/', restoreUser, asyncHandler(async(req,res) => {
    const reviews = await Review.findAll();
    return res.json(reviews)
}))

router.get('/:id(\\d+)', asyncHandler(async(req,res) => {
    const {id} = req.params
    const review = await Review.findByPk(id);
    return res.json(review)
}))

router.post('/', restoreUser, reviewValidations.validateCreate, asyncHandler(async(req,res) => {
    const review = await Review.create(req.body)
    res.json(review)
}))

router.put('/:id(\\d+)', restoreUser, reviewValidations.validateUpdate, asyncHandler(async(req,res) => {
    const {id} = req.params
    // const {
    // userId,
    // spotId,
    // review,
    // } = req.body
    const editReview = await Review.findByPk(id)
    // editReview.set({
    //     userId,
    //     spotId,
    //     review
    // })
    // await editReview.save()
    await editReview.update(req.body)
    return res.json(editReview)
}))

router.delete('/:id(\\d+)', asyncHandler(async(req,res) => {
    const {id} = req.params;
    const deleteReview = await Review.findByPk(id)
    await deleteReview.destroy();
    res.json({ message: 'success'})
}))



module.exports = router;
