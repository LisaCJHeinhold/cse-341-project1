///import express router
const router = require('express').Router();
//require swagger
router.use('/', require('./swagger'));
//route functionbs to send the message 'hello world' to the "home" page
router.get('/', (req, res) => { 
    //#swagger.tags=['Hello World']
    res.send('Hello World')
});
//create route to /contacts page
router.use('/contacts', require('./contacts'));
//export the routes
module.exports = router;