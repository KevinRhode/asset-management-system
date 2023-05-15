const router = require('express').Router();
const { Location } = require('../../models/Location');
// const withAuth = require('../utils/auth');

router.get('/',async (req,res)=>{

    try {
        //get all locations
        const locationsData = await Location.findAll();
        // Serialize data so the template can read it
        const locations = locationsData.map((location) => location.get({ plain: true }));
        // Render to screen
        res.render('locations',{
            locations,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }

});


module.exports = router;
