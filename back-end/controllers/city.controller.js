const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createCity
const createCity = async (req, res) => {
    const { name_city, ID_country} = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO city(name_city, ID_country) 
            VALUES('${name_city}', ${ID_country})`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The city was created successfully' });
    } catch (error) {
        console.log(`Error creating the city ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the city' });
    }
};

//read - getAllCity
const allCity = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM city`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of city displayed' });
    } catch (error) {
        console.log(`Error display all the city ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the city' });
    }
};

// //update - updateCityNameByID
const editCity = async (req, res) => {
    const { ID_city, name_city } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE city
            set name_city = '${name_city}'
            where ID_city = ${ID_city};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified city' });
    } catch (error) {
        console.log(`Error modifying the city information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the city information' });
    }
};

//deleteCityByID
const deleteCity = async (req, res) => {
    const { ID_city } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM city
            where ID_city = ${ID_city};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'city deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the city ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the city information' });
    }
};

module.exports = {
    createCity, allCity, editCity, deleteCity
};