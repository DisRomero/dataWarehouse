const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city.controller');
const validator = require('../validator/cityValidator');


//register-create
router.post('/create', validator.createCity, cityController.createCity);

//read - getAll
router.get('/all', cityController.allCity);

//update  - edit
router.put('/edit', validator.updateCityInfo, cityController.editCity);

//delete - delete
router.delete('/delete', validator.deleteCity, cityController.deleteCity);

module.exports = router;