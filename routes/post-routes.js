const express = require('express');
const postController = require('../contollers/post-controller.js');
const router = express.Router();

router.get('/all', postController.getAllPosts );
router.get('/location/:location',postController.getPostsByLocation)
router.get('/service/:service',postController.getPostsByService)
router.get('/one/:postId', postController.getOnePost ); 
router.get('/user/:uid', postController.getPostsByUid)
router.get('/user/location/:uid/:location', postController.getPostsByIdAndLocation)
router.get('/user/service/:uid/:service', postController.getPostsByIdAndService)
router.get('/serviceprovider/location/:postid/:location', postController.getPostsByPostIdAndLocation)
router.get('/serviceprovider/service/:postid/:service', postController.getPostsByPostIdAndService)
router.post('/', postController.createPost );
router.delete('/:postId', postController.deleteOnePost);
router.post('/:postId', postController.updateOnePost)
router.post('/one/:postId', postController.updatePostVisibility)

module.exports = router;

