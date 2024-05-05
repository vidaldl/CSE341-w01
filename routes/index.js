const routes = require('express').Router();

// Controllers
const nameController = require('../controllers/nameController');
const contactController = require('../controllers/contactsController');


routes.get('/', nameController.enmanuel); 
routes.get('/contacts', contactController.getContacts);
routes.get('/contacts/:id', contactController.getContactById); 

module.exports = routes