const express = require('express');

const userController = require('../contollers/user-controller')

const router = express.Router();


router.get('/', userController.getUser );
router.post('/', userController.createUser  );

module.exports = router;

