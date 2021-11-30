const { validationResult, check } = require('express-validator');

const createCountry = [
    check('name_country')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a country'
            });
        }
        next();
    }
];

const updateCountryInfo = [
    check('name_country')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a country'
            });
        }
        next();
    }
];

const deleteCountry = [
    check('ID_country')
        .isLength({ min: 1 })
        .withMessage('The Country ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a country'
            });
        }
        next();
    }
];

module.exports = {
    createCountry, updateCountryInfo, deleteCountry
};