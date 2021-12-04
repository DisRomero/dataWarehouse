const express = require('express');
const router = express.Router();
const companyController = require('../controllers/company.controller');
const validator = require('../validator/companyValidator');

//register-create
router.post('/create', validator.createCompany, companyController.createCompany);

//read - getAll
router.get('/all', companyController.allCompany);

//update  - edit
router.put('/edit', validator.updateCompanyInfo, companyController.editCompany);

//delete - delete
router.delete('/delete', validator.deleteCompany, companyController.deleteCompany);

module.exports = router;