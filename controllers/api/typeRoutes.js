const router = require('express').Router();
const { Type } = require('../../models');
const withAuth = require('../../utils/auth');
// const withAuth = require('../utils/auth');


//get create view
router.get('/create',withAuth,(req,res)=>{
  try {
    
    // Render to screen
    res.render('type',{
        
        logged_in: req.session.logged_in
    });

} catch (err) {
    res.status(500).json(err);
}
});
//get All
router.get('/',async (req,res)=>{

    try {
        //get all types
        const typeData = await Type.findAll();
        // Serialize data so the template can read it
        const types = typeData.map((type) => type.get({ plain: true }));
        // Render to screen
        res.render('types',{
            types,
            logged_in: req.session.logged_in
        });
        // return res.status(200).json(types);
    } catch (err) {
        return res.status(400).json(err);
    }
   

});

//get one
router.get('/:id',async (req,res)=>{
    try {
        //find obj in db
        const typeData = await Type.findByPk(req.params.id);
        //strip data
        const type = typeData.get({ plain: true });
        //render to screen
        res.render('type',{
            type,
            logged_in: req.session.logged_in
        });
        // return res.status(200).json(types);
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.post('/',withAuth,async (req,res)=>{
    try {
        const newType = await Type.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newType);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.put('/:id',withAuth,async (req,res)=>{
    try {
        const updatedType = await Type.update(
        {
          //spread req.body objects into obj
          ...req.body
        },
        {
          //limiting the rows that are updated
          where:{id:req.params.id}
        });
        res.status(200).json(updatedType);
      } catch (err) {
        res.status(400).json(err);
      }
});

router.delete('/:id',withAuth,async (req,res)=>{
    try {
        const typeData = await Type.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });  
        
        if (!typeData) {
          res.status(404).json({ message: 'No type found with this id!' });
          return;
        }
    
        res.status(200).json(typeData);
      } catch (err) {
        res.status(500).json(err);
      }
});


module.exports = router;
