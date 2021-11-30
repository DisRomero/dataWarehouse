const { validationResult, check } = require('express-validator');

const createContactWithChannel = [
    check('user_account')
        .isLength({ min: 2 })
        .withMessage('The account should be have more of 2 characters'),
    check('preference')
        .isLength({ min: 2 })
        .withMessage('The is not valid'),
    check('ID_contact')
        .isLength({ min: 1 })
        .withMessage('The contact is not valid'),
    check('ID_channel')
        .isLength({ min: 1 })
        .withMessage('The cahnnel is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator creating a contact with channel'
            });
        }
        next();
    }
];

const updateContactWithChannelInfo = [ 
    check('user_account')
        .isLength({ min: 2 })
        .withMessage('The account should be have more of 2 characters'),
    check('preference')
        .isLength({ min: 2 })
        .withMessage('The is not valid'),
    check('ID_contact')
        .isLength({ min: 1 })
        .withMessage('The contact is not valid'),
    check('ID_channel')
        .isLength({ min: 1 })
        .withMessage('The cahnnel is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator modifying a contact with channel'
            });
        }
        next();
    }
];

const deleteContactWithChannel = [
    check('ID_contact_with_channel')
        .isLength({ min: 1 })
        .withMessage('The contact with channel ID is not valid'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'Error into the validator deleting a contact with channel'
            });
        }
        next();
    }
];

module.exports = {
    createContactWithChannel, updateContactWithChannelInfo, deleteContactWithChannel
};