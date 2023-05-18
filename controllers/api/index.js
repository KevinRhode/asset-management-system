const router = require('express').Router();

const locationRoutes = require('./locationRoutes');
const typeRoutes = require('./typeRoutes');
const userRoutes = require('./userRoutes');
const assetRoutes = require('./assetRoutes');


router.use('/location', locationRoutes);
router.use('/type', typeRoutes);
router.use('/user', userRoutes);
router.use('/asset', assetRoutes);

module.exports = router;
