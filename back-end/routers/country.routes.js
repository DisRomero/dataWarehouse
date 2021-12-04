const express = require('express');
const router = express.Router();
const countryController = require('../controllers/country.controller');
const validator = require('../validator/countryValidator');


//register-create
router.post('/create', validator.createCountry, countryController.createCountry);

//read - getAll
router.get('/all', countryController.allCountry);

//update  - edit
router.put('/edit', validator.updateCountryInfo, countryController.editCountry);

//delete - delete
router.delete('/delete', validator.deleteCountry, countryController.deleteCountry);

module.exports = router;