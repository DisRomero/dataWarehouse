const { validationResult, check } = require('express-validator');

const createRegion = [
    check('name_region')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a region'
            });
        }
        next();
    }
];

const updateRegionInfo = [
    check('name_region')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 2 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a region'
            });
        }
        next();
    }
];

const deleteRegion = [
    check('ID_region')
        .isLength({ min: 1 })
        .withMessage('The Region ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a region'
            });
        }
        next();
    }
];

module.exports = {
    createRegion, updateRegionInfo, deleteRegion
};