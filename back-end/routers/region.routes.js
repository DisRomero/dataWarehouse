const express = require('express');
const router = express.Router();
const regionController = require('../controllers/region.controller');
const validator = require('../validator/regionValidator');
const middleware = require('../middleware/middleware');

//register-create 
router.post('/create', middleware.validateToken, validator.createRegion, regionController.createRegion);

//read - getAll
router.get('/all', middleware.validateToken, regionController.allRegion);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateRegionInfo, regionController.editRegion);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteRegion, regionController.deleteRegion);

module.exports = router;