const express = require('express');
const router = express.Router();
const contactWithChannelController = require('../controllers/contactWithChannel.controller');
const validator = require('../validator/contactWithChannelValidator');
const middleware = require('../middleware/middleware');

//register-create
router.post('/create', middleware.validateToken, validator.createContactWithChannel, contactWithChannelController.createContactWithChannel);

//read - getAll
router.get('/all', middleware.validateToken, contactWithChannelController.allContactWithChannel);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateContactWithChannelInfo, contactWithChannelController.editContactWithChannel);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteContactWithChannel, contactWithChannelController.deleteContactWithChannel);

module.exports = router;