const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');
const validator = require('../validator/companyValidator');
const middleware = require('../middleware/middleware');

//register-create
router.post('/create', middleware.validateToken, validator.createCompany, companyController.createCompany);

//read - getAll
router.get('/all', middleware.validateToken, companyController.allCompany);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateCompanyInfo, companyController.editCompany);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteCompany, companyController.deleteCompany);

module.exports = router;