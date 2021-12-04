const express = require('express');
const router = express.Router();
const regionController = require('../controllers/region.controller');
const validator = require('../validator/regionValidator');

//register-create 
router.post('/create', validator.createRegion, regionController.createRegion);

//read - getAll
router.get('/all', regionController.allRegion);

//update  - edit
router.put('/edit', validator.updateRegionInfo, regionController.editRegion);

//delete - delete
router.delete('/delete', validator.deleteRegion, regionController.deleteRegion);

module.exports = router;