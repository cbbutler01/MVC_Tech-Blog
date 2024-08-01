const express = require('express');
const router = express.Router();
const { BlogPost } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
  try {
    const newBlog = await BlogPost.create({
      ...req.body,
      userId: req.session.userId
    });

    res.status(200).json(newBlog);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const blogData = await BlogPost.destroy({
            where: {
                id: req.params.is,
                user_id: req.session.user_id
            }
        });

        if (!blogData) {
            res.status(404).json({ message: 'No blog found!' });
            return;
        }

        res.status(200).json(blogData);
    } catch (err){
        res.status(500).json(err);
    }
});

module.exports = router;
