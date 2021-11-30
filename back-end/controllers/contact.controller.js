const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createContact
const createContact = async (req, res) => {
    const { name_contact, lastName, mail, position, address_contact, interests, ID_company, ID_city} = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO contact(name_contact, lastName, mail, position, address_contact, interests, ID_company, ID_city) 
            VALUES('${name_contact}', '${lastName}', '${mail}', '${position}', '${address_contact}', ${interests}, ${ID_company}, ${ID_city})`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The contact was created successfully' });
    } catch (error) {
        console.log(`Error creating the contact ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the contact' });
    }
};

//read - getAllContact
const allContact = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM contact`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact displayed' });
    } catch (error) {
        console.log(`Error display all the contact ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact' });
    }
};

// //update - updateContactNameByID
const editContact = async (req, res) => {
    const { ID_contact, name_contact, lastName, mail, position, address_contact, interests, ID_company, ID_city } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE contact
            set name_contact = '${name_contact}', lastName = '${lastName}', mail = '${mail}', position = '${position}', address_contact = '${address_contact}', interests = ${interests}, ID_company = ${ID_company}, ID_city = ${ID_city}
            where ID_contact = ${ID_contact};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified contact' });
    } catch (error) {
        console.log(`Error modifying the contact information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the contact information' });
    }
};

//deleteContactByID
const deleteContact = async (req, res) => {
    const { ID_contact } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM contact
            where ID_contact = ${ID_contact};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'contact deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the contact ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the contact information' });
    }
};

module.exports = {
    createContact, allContact, editContact, deleteContact
};