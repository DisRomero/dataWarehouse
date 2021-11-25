const { validationResult, check } = require('express-validator');

const registerUser = [
    check('name_user')
        .isLength({ min: 2 })
        .withMessage('The name should be have more of 10 characters'),
    check('lastName')
        .isLength({ min: 2 })
        .withMessage('The lastName should be have more of 2 characters'),
    check('mail')
        .isEmail()
        .withMessage('The mail is not valid'),
    check('pass')
        .isLength({ min: 5, max: 8 })
        .withMessage('The password should be have more of 5 characters'),
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

const loginInputs = [
    check('correo')
        .isEmail()
        .withMessage('Error en el campo correo'),
    check('contrasenia')
        .isLength({ min: 10, max: 10 })
        .withMessage('Error en el campo contrasenia'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador del login'
            });
        }
        next();
    }
];

const updateUserName = [
    check('ID_usuario')
        .isLength({ min: 1 })
        .withMessage('Error en el campo ID_usuario'),
    check('nombre')
        .isLength({ max: 255 })
        .withMessage('Error en el campo nombre'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la modificacion del usuario'
            });
        }
        next();
    }
];

const deleteUser = [
    check('ID_usuario')
        .isLength({ min: 1 })
        .withMessage('Error en el campo ID_usuario'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la eliminacion del usuario'
            });
        }
        next();
    }
];

const updateUserTypeName = [
    check('ID_tipo_de_usuario')
        .isLength({ min: 1 })
        .withMessage('Error en el campo ID_tipo_de_usuario'),
    check('nombre')
        .isLength({ max: 255 })
        .withMessage('Error en el campo nombre'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la modificacion del tipo de usuario'
            });
        }
        next();
    }
];

const deleteUserType = [
    check('ID_tipo_de_usuario')
        .isLength({ min: 1 })
        .withMessage('Error en el campo ID_tipo_de_usuario'),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({
                errors: errors.array(),
                msg: 'error en el validador de la eliminacion del tipo de usuario'
            });
        }
        next();
    }
];

module.exports = {
    registerUser, loginInputs
};