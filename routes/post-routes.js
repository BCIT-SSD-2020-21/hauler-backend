const express = require('express');

const postController = require('../contollers/post-controller.js')

const router = express.Router();


router.get('/', postController.getPosts );


module.exports = router;

