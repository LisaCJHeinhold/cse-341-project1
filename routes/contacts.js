//import express
const express = require('express');
//set/import router
const router = express.Router();
//import contacts.js from controllers
const contactsController = require('../controllers/contacts');
//set route points to access different data according to the functions.
router.get('/', contactsController.getAll);
router.get('/:id', contactsController.getSingle);
router.post('/', contactsController.createContact);
router.put('/:id', contactsController.updateContact);
router.delete('/:id', contactsController.deleteContact);
//export the routes
module.exports = router;