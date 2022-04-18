const router = require('express').Router();

const sessionRouter = require('./session.js');
const usersRouter = require('./users.js');
const spotsRouter = require('./spots.js')
const imagesRouter = require('./images.js')
const reviewRouter = require('./review.js')
const bookingsRouter = require('./bookings.js')

router.use('/session', sessionRouter);
router.use('/users', usersRouter);
router.use('/spots', spotsRouter);
router.use('/images', imagesRouter);
router.use('/reviews', reviewRouter);
router.use('/bookings', bookingsRouter);

module.exports = router;
