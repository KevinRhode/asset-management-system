const router = require('express').Router();
const { Asset,User,Comment,Type } = require('../../models');
// const withAuth = require('../utils/auth');


router.get('/', async (req, res) => {
    try {
      const assetData = await Asset.findAll({
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
      });
      
  
      const assets = assetData.map((asset)=> asset.get({ plain: true }));
      
      res.render('Assets', {
        // layout:'main-comment',
        assets,
        // comment,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

  module.exports = router;