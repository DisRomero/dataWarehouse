const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createRegion
const createRegion = async (req, res) => {
    const { name_region } = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO region(name_region) 
            VALUES('${name_region}')`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The region was created successfully' });
    } catch (error) {
        console.log(`Error creating the region ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the region' });
    }
};

//read - getAllRegion
const allRegion = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM region`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of region displayed' });
    } catch (error) {
        console.log(`Error display all the region ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the region' });
    }
};

// //update - updateRegionNameByID
const editRegion = async (req, res) => {
    const { ID_region, name_region } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE region
            set name_region = '${name_region}'
            where ID_region = ${ID_region};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified region' });
    } catch (error) {
        console.log(`Error modifying the region information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the region information' });
    }
};

//deleteRegionByID
const deleteRegion = async (req, res) => {
    const { ID_region } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM region
            where ID_region = ${ID_region};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'Region deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the region ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the region information' });
    }
};

module.exports = {
    createRegion, allRegion, editRegion, deleteRegion
};