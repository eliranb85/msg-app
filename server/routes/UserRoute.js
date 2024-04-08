const express = require('express');
const router = express.Router();
const UserController = require('../controllers/UserController');

// router.get('/findUser', userController.findUserByUserName);

router.post('/insertUser', UserController.insertUser);
router.get('/getUser', UserController.getAllUser)
router.get('/findUser', UserController.findUserByName);
module.exports = router;
