const router = require('express').Router();
const { Asset,User,Comment,Type,Location } = require('../../models');
// const withAuth = require('../utils/auth');

router.get('/create', async (req, res) => {
  try {
    const locationData = await Location.findAll({});
    const typeData = await Type.findAll({});      

    const locations = locationData.map((location)=> location.get({ plain: true }));
      
    const types = typeData.map((type)=> type.get({ plain: true }));
     
    res.render('asset', {
      // layout:'main-comment',
      locations,
      types,
      // comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});
router.get('/edit/:id', async (req, res) => {
  try {
    const assetData = await Asset.findByPk(req.params.id,{
      include:[{model:Location},{model:Type}]
    });
    const locationData = await Location.findAll({});
    const typeData = await Type.findAll({});      

    const locations = locationData.map((location)=> location.get({ plain: true }));
      
    const types = typeData.map((type)=> type.get({ plain: true }));

    const asset = assetData.get({ plain: true });
      
     
    res.render('asset-update', {
      // layout:'main-comment',
      asset,
      locations,
      types,
      // comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
  
});
router.get('/', async (req, res) => {
    try {
      const assetData = await Asset.findAll(
        {
          order:[
            ['name','ASC'],
          ],
        include: [
          {
            model:Location,
            attributes:['description']
          },
          {
            model:Type,
            attributes:['description']
          },
          
          {
            model:Comment,
            // attributes:['user_id','description'],
            include:[{
              model:User,
              attributes:['username']
          }]            
          },          
        ],        
        },
    );      
  
      const assets = assetData.map((asset)=> asset.get({ plain: true }));
        
      
      return res.status(200).json(assets);
      // res.render('Assets', {
      //   // layout:'main-comment',
      //   assets,
      //   // comment,
      //   logged_in: req.session.logged_in
      // });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.post('/', async (req,res)=>{
  try {
    const newAsset = await Asset.create({
      ...req.body,
      user_id: req.session.user_id,
    });
  
    res.status(200).json(newAsset);  
  } catch (err) {
    res.status(500).json(err);
  }
});
router.put('/:id', async (req,res)=>{
  try {
    const updatedAsset = await Asset.update(
    {
      ...req.body
    },
    {
      where:{id:req.params.id}
    });
    res.status(200).json(updatedAsset);
  } catch (err) {
    res.status(400).json(err);
  }
});


router.delete('/:id', async (req,res)=>{
  try {
    const assetData = await Asset.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });  
    
    if (!assetData) {
      res.status(404).json({ message: 'No Asset found with this id!' });
      return;
    }

    res.status(200).json(assetData);
  } catch (err) {
    res.status(500).json(err);
  }
});

  module.exports = router;