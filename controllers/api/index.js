const router = require('express').Router();

const locationRoutes = require('./locationRoutes');
const typeRoutes = require('./typeRoutes')
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
router.use('/location', locationRoutes);
router.use('/type',typeRoutes);

module.exports = router;
