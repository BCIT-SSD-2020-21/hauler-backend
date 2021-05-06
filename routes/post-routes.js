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
// router.get('/serviceprovider/location/:postId/:location', postController.getPostsByPostIdAndLocation)
// router.get('/serviceprovider/service/:postId/:service', postController.getPostsByPostIdAndService)
router.post('/', postController.createPost );
router.delete('/:postId', postController.deleteOnePost);
router.post('/:postId', postController.updateOnePost)
router.post('/one/:postId', postController.updatePostVisibility)
router.post('/response/service-provider', postController.addServiceProviserResponse);
router.post('/response/user', postController.addUserResponse) 
router.get('/response/service-provider/:serviceProviderId/:postId', postController.getResponseByServiseProviderId)

module.exports = router;

