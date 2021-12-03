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

//get contact by position
const contactByPosition = async (req, res) => {
    const { search } = req.body;
    try {
        const result = await sequelize.query(
            `SELECT con.name_contact, con.mail, re.name_region, co.name_country, com.name_company, con.position, cwc.preference, con.interests
            FROM contact con, city ci, country co, region re, company com, contact_with_channel cwc, channel c
            WHERE con.position LIKE '%${search}%' 
            AND con.ID_city = ci.ID_city AND ci.ID_country = co.ID_country AND co.ID_region = re.ID_region
            AND con.ID_company = com.ID_company
            AND con.ID_contact = cwc.ID_contact AND c.ID_channel = cwc.ID_channel`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact by position displayed' });
    } catch (error) {
        console.log(`Error display all the contact by position ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact by position' });
    }
};

//get contact by region/country
const contactByRegionCountry = async (req, res) => {
    const { search } = req.body;
    try {
        const result = await sequelize.query(
            `SELECT con.name_contact, con.mail, re.name_region, co.name_country, com.name_company, con.position, cwc.preference, con.interests
            FROM contact con, city ci, country co, region re, company com, contact_with_channel cwc, channel c
            WHERE re.name_region like '%${search}%' or co.name_country like '%${search}%'
            AND con.ID_city = ci.ID_city AND ci.ID_country = co.ID_country AND co.ID_region = re.ID_region
            AND con.ID_company = com.ID_company
            AND con.ID_contact = cwc.ID_contact AND c.ID_channel = cwc.ID_channel`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact by region or country displayed' });
    } catch (error) {
        console.log(`Error display all the contact by region or country ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact by region or country' });
    }
};

//get contact by interests
const contactByInterest = async (req, res) => {
    const { search } = req.body;
    try {
        const result = await sequelize.query(
            `SELECT con.name_contact, con.mail, re.name_region, com.ID_company, com.name_company, con.position, cwc.preference, con.interests
            FROM contact con, city ci, country co, region re, company com, contact_with_channel cwc, channel c
            WHERE con.ID_city = ci.ID_city AND ci.ID_country = co.ID_country and co.ID_region = re.ID_region
            and con.ID_company = com.ID_company
            and con.ID_contact = cwc.ID_contact and c.ID_channel = cwc.ID_channel and con.interests like '%${search}%'`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact by interests displayed' });
    } catch (error) {
        console.log(`Error display all the contact by interests ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact by interests' });
    }
};

//get contact by favorite channel
const contactByChannel = async (req, res) => {
    const { search } = req.body;
    try {
        const result = await sequelize.query(
            `SELECT con.name_contact, con.mail, re.name_region, com.ID_company, com.name_company, con.position, cwc.preference, con.interests
            FROM contact con, city ci, country co, region re, company com, contact_with_channel cwc, channel c
            WHERE con.ID_city = ci.ID_city AND ci.ID_country = co.ID_country and co.ID_region = re.ID_region
            and con.ID_company = com.ID_company
            and con.ID_contact = cwc.ID_contact and c.ID_channel = cwc.ID_channel and cwc.preference like '%${search}%'`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact by channel displayed' });
    } catch (error) {
        console.log(`Error display all the contact by channel ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact by channel' });
    }
};

module.exports = {
    contactByName, contactByPosition, contactByRegionCountry, contactByInterest, contactByChannel
};