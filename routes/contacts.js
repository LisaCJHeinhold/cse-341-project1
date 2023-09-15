//import express
const express = require('express');
//set/import router
const router = express.Router();
//import contacts.js from controllers
const usersController = require('../controllers/contacts');
//set route points to access different data according to the functions.
router.get('/', usersController.getAll);
router.get('/:id', usersController.getSingle);
//export the routes
module.exports = router;