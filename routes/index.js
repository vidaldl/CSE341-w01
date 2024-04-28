const routes = require('express').Router();

// Controllers
const nameController = require('../controllers/nameController');


routes.get('/', nameController.enmanuel); 

module.exports = routes