const router = require('express').Router();
const { Asset, User, Comment,Location,Type } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
    try {
    
  
    //   const assets = assetData.map((asset)=> asset.get({ plain: true }));
        
      res.render('landing', {
        // layout:'comment',
        // assets,
        // comment,
        logged_in: req.session.logged_in
      });
    } catch (err) {
      res.status(500).json(err);
    }
  });

router.get('/dashboard',withAuth,async(req,res)=>{
  try {
    const assetData = await Asset.findAll(
      {
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
    }
  );      

    const assets = assetData.map((asset)=> asset.get({ plain: true }));
      // return res.status(200).json(assets);
    res.render('dashboard', {
      // layout:'main-comment',
      assets,
      // comment,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

  router.get('/login', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('login');
  });
  router.get('/sign-up', (req, res) => {
    // If the user is already logged in, redirect the request to another route
    if (req.session.logged_in) {
      res.redirect('/dashboard');
      return;
    }
  
    res.render('signup');
  });

  module.exports = router;