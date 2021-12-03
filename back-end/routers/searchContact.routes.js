const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');
const contactController = require('../controllers/searchContact.controller');


// search a contact by name or position
router.get('/ByName', middleware.validateToken, contactController.contactByName);

// search a contact by position
router.get('/ByPosition', middleware.validateToken, contactController.contactByPosition);

//search contact by region
router.get('/ByRegionCountry', middleware.validateToken, contactController.contactByRegionCountry);

//search contact by interests
router.get('/ByInterests', middleware.validateToken, contactController.contactByInterest);

//search contact by favorite channel
router.get('/ByChannel', middleware.validateToken, contactController.contactByChannel);

module.exports = router;