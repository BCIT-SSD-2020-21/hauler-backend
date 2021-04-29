const express = require('express');

const postController = require('../contollers/post-controller.js')

const router = express.Router();


router.get('/', postController.getPosts );
router.get('/:postId', postController.getOnePost );
router.post('/', postController.createPost );


module.exports = router;

