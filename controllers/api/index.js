const router = require('express').Router();
const blogPostRoutes = require('./blogPostRoutes');
const commentsRoutes = require('./commentsRoutes');
const userRoutes = require('./userRoutes');

router.use('/blogPosts', blogPostRoutes);
router.use('/comments', commentsRoutes);
router.use('/users', userRoutes);

module.exports = router;
