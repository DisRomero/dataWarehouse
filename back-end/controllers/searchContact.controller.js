const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//get contact by name
const contactByName = async (req, res) => {
    const { search } = req.body;
    try {
        const result = await sequelize.query(
            `SELECT con.name_contact, con.mail, re.name_region, co.name_country, com.name_company, con.position, cwc.preference, con.interests
            FROM contact con, city ci, country co, region re, company com, contact_with_channel cwc, channel c
            WHERE con.name_contact like '%${search}%' 
            AND con.ID_city = ci.ID_city AND ci.ID_country = co.ID_country AND co.ID_region = re.ID_region
            AND con.ID_company = com.ID_company
            AND con.ID_contact = cwc.ID_contact AND c.ID_channel = cwc.ID_channel`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact by name displayed' });
    } catch (error) {
        console.log(`Error display all the contact by name ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact by name' });
    }
};

module.exports = {
    contactByName
};