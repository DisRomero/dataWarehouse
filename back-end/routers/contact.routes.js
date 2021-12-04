const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.controller');
const validator = require('../validator/contactValidator');

//register-create
router.post('/create', validator.createContact, contactController.createContact);

//read - getAll
router.get('/all', contactController.allContact);

//update  - edit
router.put('/edit', validator.updateContactInfo, contactController.editContact);

//delete - delete
router.delete('/delete', validator.deleteContact, contactController.deleteContact);

module.exports = router;