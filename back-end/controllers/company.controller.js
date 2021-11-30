const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createCompany
const createCompany = async (req, res) => {
    const { name_company, address_company, mail, phoneNumber, ID_city, ID_user} = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO company(name_company, address_company, mail, phoneNumber, ID_city, ID_user) 
            VALUES('${name_company}', '${address_company}', '${mail}', ${phoneNumber}, ${ID_city}, ${ID_user})`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The company was created successfully' });
    } catch (error) {
        console.log(`Error creating the company ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the company' });
    }
};

//read - getAllCompany
const allCompany = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM company`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of company displayed' });
    } catch (error) {
        console.log(`Error display all the company ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the company' });
    }
};

// //update - updateCompanyNameByID
const editCompany = async (req, res) => {
    const { ID_company, name_company, address_company, phoneNumber, ID_city } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE company
            set name_company = '${name_company}', address_company = '${address_company}', phoneNumber = ${phoneNumber}, ID_city = ${ID_city}
            where ID_company = ${ID_company};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified company' });
    } catch (error) {
        console.log(`Error modifying the company information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the company information' });
    }
};

//deleteCompanyByID
const deleteCompany = async (req, res) => {
    const { ID_company } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM company
            where ID_company = ${ID_company};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'company deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the company ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the company information' });
    }
};

module.exports = {
    createCompany, allCompany, editCompany, deleteCompany
};