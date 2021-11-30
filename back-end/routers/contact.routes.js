const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const validator = require('../validator/contactValidator');
const middleware = require('../middleware/middleware');

//register-create
router.post('/create', middleware.validateToken, validator.createContact, contactController.createContact);

//read - getAll
router.get('/all', middleware.validateToken, contactController.allContact);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateContactInfo, contactController.editContact);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteContact, contactController.deleteContact);

module.exports = router;