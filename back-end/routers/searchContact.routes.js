const express = require('express');
const router = express.Router();
const middleware = require('../middleware/middleware');

//
// router.post('/', middleware.validateToken, validator.createContactWithChannel, contactWithChannelController.createContactWithChannel);

/**
 * /** search a contact by name or position
 * SELECT contact.name_contact, contact.position, city.ID_city, city.name_city FROM contact
inner join city on contact.ID_city = city.ID_city
where contact.name_contact like "%m%" or contact.position like "%m%"


search contact by interests 
search contact by favorite channel
 */
module.exports = router;