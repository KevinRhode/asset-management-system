const router = require('express').Router();

const locationRoutes = require('./locationRoutes');
// const homeRoutes = require('./homeRoutes');

// router.use('/', homeRoutes);
router.use('/location', locationRoutes);

module.exports = router;
