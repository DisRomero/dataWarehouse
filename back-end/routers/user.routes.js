const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const validator = require('../validator/userValidator');
const middleware = require('../middleware/middleware');

//register-createUser basic by default, to create an admin should be add by DB
router.post('/createUser', middleware.validateToken, validator.createUser, userController.createUser);

//login
router.post('/login', validator.login, userController.login);

//read - getAll
router.get('/all', middleware.validateToken, userController.allUser);

//update  - edit
router.put('/edit', middleware.validateToken, validator.updateUserInfo, userController.editUser);

//delete - delete
router.delete('/delete', middleware.validateToken, validator.deleteUser, userController.deleteUser);

module.exports = router;