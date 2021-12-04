const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const contactController = require('../controllers/searchContact.controller');

// search a contact by name
router.get('/ByName', middleware.validateToken, contactController.contactByName);

module.exports = router;