const router = require('express').Router();

const reviewRoutes = require('./reviewsRoutes');
const userRoutes = require('./usersRoutes');

router.use('/reviews', reviewRoutes)
router.use('/users', userRoutes);

module.exports = router;