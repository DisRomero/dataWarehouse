const { validationResult, check } = require('express-validator');

const createCity = [
    check('name_city')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a city'
            });
        }
        next();
    }
];

const updateCityInfo = [
    check('name_city')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a city'
            });
        }
        next();
    }
];

const deleteCity = [
    check('ID_city')
        .isLength({ min: 1 })
        .withMessage('The City ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a city'
            });
        }
        next();
    }
];

module.exports = {
    createCity, updateCityInfo, deleteCity
};