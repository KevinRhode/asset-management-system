const router = require('express').Router();
const { Location } = require('../../models');
const withAuth = require('../../utils/auth');

//get create view
router.get('/create',withAuth,(req,res)=>{
  try {
    
    // Render to screen
    res.render('location',{
        
        logged_in: req.session.logged_in
    });

} catch (err) {
    res.status(500).json(err);
}
});

//get all
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

//get one
router.get('/:id',async (req,res)=>{

    try {
        //get one location
        const locationData = await Location.findByPk(req.params.id);
        // Serialize data so the template can read it
        const location = locationData.get({ plain: true });
        // Render to screen
        res.render('location',{
            location,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }

});
router.post('/',withAuth,async (req,res)=>{

    try {
        const newLocation = await Location.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newLocation);
      } catch (err) {
        res.status(400).json(err);
      }

});
router.put('/:id',withAuth,async (req,res)=>{

    try {
        const updatedLocation = await Location.update(
        {
          ...req.body
        },
        {
          where:{id:req.params.id}
        });
        res.status(200).json(updatedLocation);
      } catch (err) {
        res.status(400).json(err);
      }

});
router.delete('/:id',withAuth,async (req,res)=>{

    try {
        const locationData = await Location.destroy({
          where: {
            id: req.params.id
          },
        });  
        
        if (!locationData) {
          res.status(404).json({ message: 'No location found with this id!' });
          return;
        }
    
        res.status(200).json(locationData);
      } catch (err) {
        res.status(500).json(err);
      }

});//or maybe destory

module.exports = router;
