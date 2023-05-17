const router = require('express').Router();

const locationRoutes = require('./locationRoutes');
const typeRoutes = require('./typeRoutes');
const userRoutes = require('./userRoutes');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
router.use('/location', locationRoutes);
router.use('/type',typeRoutes);
router.use('/user',userRoutes);

module.exports = router;
