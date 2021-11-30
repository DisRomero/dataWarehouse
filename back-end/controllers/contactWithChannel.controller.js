const sequelize = require('../conexion');
const jwt = require('jsonwebtoken');
require('dotenv').config()
const SECRET = process.env.LANG
const EXPIRES = process.env.EXPIRES

//register-createContactWithChannel
const createContactWithChannel = async (req, res) => {
    const { user_account, preference, ID_contact, ID_channel} = req.body;

    try {
        const result = await sequelize.query(
            `INSERT INTO contact_with_channel(user_account, preference, ID_contact, ID_channel) 
            VALUES('${user_account}', '${preference}', ${ID_contact}, ${ID_channel})`,
            { type: sequelize.QueryTypes.INSERT });
        res.status(201).json({ msg: 'The contact with channel was created successfully' });
    } catch (error) {
        console.log(`Error creating the contact with channel ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred creating the contact with channel' });
    }
};

//read - getAllContactWithChannel
const allContactWithChannel = async (req, res) => {
    try {
        const result = await sequelize.query(
            `SELECT * FROM contact_with_channel`,
            { type: sequelize.QueryTypes.SELECT });
        res.status(200).json({ body: result, msg: 'List of contact with channel displayed' });
    } catch (error) {
        console.log(`Error display all the contact with channel ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred with display all the contact with channel' });
    }
};

// //update - updateContactWithChannelByID
const editContactWithChannel = async (req, res) => {
    const { ID_contact_with_channel, user_account, preference, ID_contact, ID_channel } = req.body;
    try {
        const result = await sequelize.query(
            `UPDATE contact_with_channel 
            set user_account = '${user_account}', preference = '${preference}', ID_contact = ${ID_contact}, ID_channel = ${ID_channel}
            where ID_contact_with_channel = ${ID_contact_with_channel};`,
            { type: sequelize.QueryTypes.UPDATE });
        res.status(200).json({ body: result, msg: 'Successfully modified contact with channel' });
    } catch (error) {
        console.log(`Error modifying the contact with channel information ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred modifying the contact with channel information' });
    }
};

//deleteContactWithChannelByID
const deleteContactWithChannel = async (req, res) => {
    const { ID_contact_with_channel } = req.body;
    try {
        const result = await sequelize.query(
            `DELETE FROM contact_with_channel
            where ID_contact_with_channel = ${ID_contact_with_channel};`,
            { type: sequelize.QueryTypes.DELETE });
        res.status(200).json({ body: result, msg: 'contact with channel deleted successfully' });
    } catch (error) {
        console.log(`Error into the validator deleting the contact with channel ${error}`);
        res.status(400).json({ msg: 'Oops, an error has occurred deleting the contact with channel information' });
    }
};

module.exports = {
    createContactWithChannel, allContactWithChannel, editContactWithChannel, deleteContactWithChannel
};