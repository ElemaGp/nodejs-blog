const express = require('express');
const blogController = require('../controllers/blogController');
const router = express.Router();


//outputting all blogs on the /blogs route
router.get('/', blogController.blog_index);

//handling the Post request form to /blogs that you made in [create.ejs (aka /blogs/create)], to create a new blog
router.post('/', blogController.blog_create_post);

//the page with the form for creating a new blog. (the "/blogs/:id" route should never be above this, else Express will trigger that function if you go to this /create)
router.get('/create', blogController.blog_create_get);

//Getting a single blog's content when you click on it
router.get('/:id', blogController.blog_details);

//Deleting a blog (the a-tag and frontend javascript code it's connected to is in details.ejs)
router.delete('/:id', blogController.blog_delete);

module.exports = router;