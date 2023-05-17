const router = require('express').Router();
const { Comment } = require('../../models');
// const withAuth = require('../utils/auth');


//get one
router.get('/:id',async (req,res)=>{

    try {
        //get one comment
        const commentData = await Comment.findByPk(req.params.id);
        // Serialize data so the template can read it
        const comment = commentData.get({ plain: true });
        // Render to screen
        res.render('comment',{
          comment,
            logged_in: req.session.logged_in
        });

    } catch (err) {
        res.status(500).json(err);
    }

});
router.post('/',async (req,res)=>{

    try {
        const newComment = await Comment.create({
          ...req.body,
          user_id: req.session.user_id,
        });
    
        res.status(200).json(newComment);
      } catch (err) {
        res.status(400).json(err);
      }

});
router.put('/:id',async (req,res)=>{

    try {
        const updatedComment = await Comment.update(
        {
          ...req.body
        },
        {
          where:{id:req.params.id}
        });
        res.status(200).json(updatedComment);
      } catch (err) {
        res.status(400).json(err);
      }

});
router.delete('/:id',async (req,res)=>{

    try {
        const commentData = await Comment.destroy({
          where: {
            id: req.params.id,
            user_id: req.session.user_id,
          },
        });  
        
        if (!commentData) {
          res.status(404).json({ message: 'No comment found with this id!' });
          return;
        }
    
        res.status(200).json(commentData);
      } catch (err) {
        res.status(500).json(err);
      }

});

module.exports = router;
