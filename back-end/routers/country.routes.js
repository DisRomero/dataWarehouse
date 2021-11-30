const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country.controller');
const validator = require('../validator/countryValidator');
const middleware = require('../middleware/middleware');

//register-create
router.post('/create', middleware.validateToken, validator.createCountry, countryController.createCountry);

//read - getAll
router.get('/all', middleware.validateToken, countryController.allCountry);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateCountryInfo, countryController.editCountry);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteCountry, countryController.deleteCountry);

module.exports = router;