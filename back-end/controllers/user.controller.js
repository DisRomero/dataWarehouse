const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createUser
const createUser = async (req, res) => {
    const { name_user, lastName, mail, ID_user_type, pass } = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO user(name_user, lastName, mail, ID_user_type, pass) 
            VALUES('${name_user}', '${lastName}', '${mail}', ${ID_user_type}, '${pass}')`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The user was created successfully' });
    } catch (error) {
        console.log(`Error creating the user ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the user' });
    }
};

const login = async (req, res) => {
    const { mail, pass } = req.body;

    try {
        let result = await sequelize.query(
            `SELECT * FROM user WHERE mail="${mail}" AND pass="${pass}"`,
            { type: sequelize.QueryTypes.SELECT })
        result = result[0];

        if (result) {
            let token = jwt.sign({ mail: result.mail, ID_user_type: result.ID_user_type }, SECRET, { expiresIn: EXPIRES });
            return res.status(200).json({ msg: 'Login successful', token: token });
        }
        return res.status(404).json({ msg: 'User not found' });

    } catch (error) {
        console.log(`Login error ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with the login' });
    }
};

//read - getAllUser
const allUser = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM user`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of users displayed' });
    } catch (error) {
        console.log(`Error display all the users ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the users' });
    }
};

// //update - updateUserNameByID
const editUser = async (req, res) => {
    const { ID_user, name_user, lastName, mail, ID_user_type, pass } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE user
            set name_user = '${name_user}', lastName = '${lastName}', mail = '${mail}', ID_user_type = '${ID_user_type}', pass='${pass}'
            where ID_user = ${ID_user};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified user' });
    } catch (error) {
        console.log(`Error modifying the user information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the user information' });
    }
};

//deleteUserByID
const deleteUser = async (req, res) => {
    const { ID_user } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM user
            where ID_user = ${ID_user};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'User deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the user ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the user information' });
    }
};

module.exports = {
    createUser, login, allUser, editUser, deleteUser
};