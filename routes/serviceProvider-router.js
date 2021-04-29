const express = require('express');

const serviceProviderController = require('../contollers/serviceProvider-controller')

const router = express.Router();


router.get('/', serviceProviderController.getServiceProvider );
router.post('/', serviceProviderController.createServiceProvider );

module.exports = router;

