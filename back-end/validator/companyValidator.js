const { validationResult, check } = require('express-validator');

const createCompany = [
    check('name_company')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    check('address_company')
        .isLength({ min: 2 })
        .withMessage('The address should be have more of 2 characters'),
        check('mail')
        .isEmail()
        .withMessage('The Mail is not valid'),
    check('phoneNumber')
        .isLength({ min: 2 })
        .withMessage('The phone number should be have more of 2 characters'),
    check('ID_city')
        .isLength({ min: 1 })
        .withMessage('The city is not valid'),
    check('ID_user')
        .isLength({ min: 1 })
        .withMessage('The user is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a company'
            });
        }
        next();
    }
];

const updateCompanyInfo = [ 
    check('name_company')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    check('address_company')
        .isLength({ min: 2 })
        .withMessage('The address should be have more of 2 characters'),
    check('phoneNumber')
        .isLength({ min: 2 })
        .withMessage('The phone number should be have more of 2 characters'),
    check('ID_city')
        .isLength({ min: 1 })
        .withMessage('The city is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a company'
            });
        }
        next();
    }
];

const deleteCompany = [
    check('ID_company')
        .isLength({ min: 1 })
        .withMessage('The Company ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a company'
            });
        }
        next();
    }
];

module.exports = {
    createCompany, updateCompanyInfo, deleteCompany
};