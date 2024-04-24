"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const { BlogCategory: blogCategoryView, BlogPost: blogPostView } = require('../controllers/blogControllerView')

// router.all('/', blogPostView.list)
// router.all('/create', blogPostView.create)
// router.all('/:postId', blogPostView.read)
// router.all('/:postId/update', blogPostView.update)
// router.all('/:postId/delete', blogPostView.delete)

router.all('/', (req, res) => {
    res.redirect('/post')
})

router.all('/post', blogPostView.list)
router.all('/post/create', blogPostView.create)
router.all('/post/:postId', blogPostView.read)
router.all('/post/:postId/update', blogPostView.update)
router.all('/post/:postId/delete', blogPostView.delete)

module.exports = router