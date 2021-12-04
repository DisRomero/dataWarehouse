const { validationResult, check } = require('express-validator');

const createUser = [
    check('name_user')
        .isLength({ min: 2 })
        .withMessage('The FirstName should be have more of 2 characters'),
    check('lastName')
        .isLength({ min: 2 })
        .withMessage('The LastName should be have more of 2 characters'),
    check('mail')
        .isEmail()
        .withMessage('The Mail is not valid'),
    check('ID_user_type')
        .isLength({ min: 2 })
        .withMessage('The User type is not valid'),
    check('pass')
        .isLength({ min: 5, max: 8 })
        .withMessage('The Password should be have more of 5 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a user'
            });
        }
        next();
    }
];

const login = [
    check('mail')
        .isEmail()
        .withMessage('Error in the Mail field'),
    check('pass')
        .isLength({ min: 5, max: 8 })
        .withMessage('Error in the Password field'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error in the login validator'
            });
        }
        next();
    }
];

const updateUserInfo = [
    check('name_user')
        .isLength({ min: 2 })
        .withMessage('The FirstName should be have more of 2 characters'),
        check('lastName')
        .isLength({ min: 2 })
        .withMessage('The LastName should be have more of 2 characters'),
    check('mail')
        .isEmail()
        .withMessage('The Mail is not valid'),
    check('ID_user_type')
        .isLength({ min: 1 })
        .withMessage('The User type is not valid'),
    check('pass')
        .isLength({ min: 5, max: 8 })
        .withMessage('The Password should be have more of 5 characters'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a user'
            });
        }
        next();
    }
];

const deleteUser = [
    check('ID_user')
        .isLength({ min: 1 })
        .withMessage('The User ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a user'
            });
        }
        next();
    }
];

module.exports = {
    createUser, login, updateUserInfo, deleteUser
};