const express = require('express');
const router = express.Router();
const MessageController = require('../controllers/MessagetController');

router.get('/getMessage', MessageController.getMessage);

router.post('/insertMessage', MessageController.insertMessage);

router.get('/deleteMessage', MessageController.deleteMessage);

router.get('/findSentMassage', MessageController.findSentMassage);

router.get('/findIncomeMassage', MessageController.findIncomeMassage);

module.exports = router;
