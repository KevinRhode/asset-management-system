const router = require('express').Router();
const { Type } = require('../../models');
// const withAuth = require('../utils/auth');

//get All
router.get('/',async (req,res)=>{

    try {
        const typeData = await Type.findAll();

        const types = typeData.map((type) => type.get({ plain: true }));
    
        return res.status(200).json(types);
    } catch (err) {
        return res.status(400).json(err);
    }
   

});

//get one
router.get('/:id',async (req,res)=>{
    try {
        const typeData = await Type.findByPk(req.params.id);

        const types = typeData.map((type) => type.get({ plain: true }));
    
        return res.status(200).json(types);
    } catch (err) {
        return res.status(400).json(err);
    }
});

router.post('/',async (req,res)=>{
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

router.put('',(req,res)=>{
    
});

router.delete('',(req,res)=>{
    
});


module.exports = router;
