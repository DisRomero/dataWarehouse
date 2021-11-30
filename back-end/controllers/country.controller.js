const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createCountry
const createCountry = async (req, res) => {
    const { name_country, ID_region} = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO country(name_country, ID_region) 
            VALUES('${name_country}', ${ID_region})`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The country was created successfully' });
    } catch (error) {
        console.log(`Error creating the country ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the country' });
    }
};

//read - getAllCountry
const allCountry = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM country`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of country displayed' });
    } catch (error) {
        console.log(`Error display all the country ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the country' });
    }
};

// //update - updateCountryNameByID
const editCountry = async (req, res) => {
    const { ID_country, name_country } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE country
            set name_country = '${name_country}'
            where ID_country = ${ID_country};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified country' });
    } catch (error) {
        console.log(`Error modifying the country information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the country information' });
    }
};

//deleteCountryByID
const deleteCountry = async (req, res) => {
    const { ID_country } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM country
            where ID_country = ${ID_country};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'country deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the country ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the country information' });
    }
};

module.exports = {
    createCountry, allCountry, editCountry, deleteCountry
};