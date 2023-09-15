///import express router
const router = require('express').Router();
//route functionbs to send the message 'hello world' to the "home" page
router.get('/', (req, res) => { res.send('Hello World')});
//create route to /contacts page
router.use('/contacts', require('./contacts'));
//export the routes
module.exports = router;