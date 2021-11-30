const express = require('express');
const router = express.Router();
const cityController = require('../controllers/city.controller');
const validator = require('../validator/cityValidator');
const middleware = require('../middleware/middleware');

//register-create
router.post('/create', middleware.validateToken, validator.createCity, cityController.createCity);

//read - getAll
router.get('/all', middleware.validateToken, cityController.allCity);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateCityInfo, cityController.editCity);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteCity, cityController.deleteCity);

module.exports = router;