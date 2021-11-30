const { validationResult, check } = require('express-validator');

const createContact = [
    check('name_contact')
        .isLength({ min: 2 })
        .withMessage('The first name should be have more of 2 characters'),
    check('lastName')
        .isLength({ min: 2 })
        .withMessage('The last name should be have more of 2 characters'),
    check('mail')
        .isEmail()
        .withMessage('The Mail is not valid'),
    check('position')
        .isLength({ min: 2 })
        .withMessage('The position should be have more of 2 characters'),
    check('address_contact')
        .isLength({ min: 2 })
        .withMessage('The address should be have more of 2 characters'),
    check('interests')
        .isLength({ min: 1 })
        .withMessage('The interest is not valid'),
    check('ID_company')
        .isLength({ min: 1 })
        .withMessage('The company is not valid'),
    check('ID_city')
        .isLength({ min: 1 })
        .withMessage('The city is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a contact'
            });
        }
        next();
    }
];

const updateContactInfo = [ 
    check('name_contact')
        .isLength({ min: 2 })
        .withMessage('The first name should be have more of 2 characters'),
    check('lastName')
        .isLength({ min: 2 })
        .withMessage('The last name should be have more of 2 characters'),
    check('mail')
        .isEmail()
        .withMessage('The Mail is not valid'),
    check('position')
        .isLength({ min: 2 })
        .withMessage('The position should be have more of 2 characters'),
    check('address_contact')
        .isLength({ min: 2 })
        .withMessage('The address should be have more of 2 characters'),
    check('interests')
        .isLength({ min: 1 })
        .withMessage('The interest is not valid'),
    check('ID_company')
        .isLength({ min: 1 })
        .withMessage('The company is not valid'),
    check('ID_city')
        .isLength({ min: 1 })
        .withMessage('The city is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a contact'
            });
        }
        next();
    }
];

const deleteContact = [
    check('ID_contact')
        .isLength({ min: 1 })
        .withMessage('The contact ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a contact'
            });
        }
        next();
    }
];

module.exports = {
    createContact, updateContactInfo, deleteContact
};