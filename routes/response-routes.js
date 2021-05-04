const express = require('express');
const responseController = require('../contollers/response-controller.js')
const router = express.Router();

router.get('/', responseController.getAll)
router.post('/service-provider', responseController.addServiceProviserResponse);
router.get('/user/:postId', responseController.getAllResponse);
router.post('/user', responseController.addUserResponse) 
router.get('/service-provider/:serviceProviderId', responseController.getResponseByServiseProviderId)
router.get('/service-provider/:serviceProviderId/:postId', responseController.getOneResponse)
router.delete('/:responseId', responseController.deleteResponse) 

module.exports = router;
