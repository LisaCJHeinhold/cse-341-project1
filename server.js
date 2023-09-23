//imports
const express = require('express');
const bodyParser = require('body-parser');
const mongodb = require('./data/database');
const app = express();
//set up the port environment
const port = process.env.PORT || 3000;
//sets up the routes/endpoints to be used by the api
app.use(bodyParser.json());
app.use('/', require('./routes'));
//initialize database and starts server, or throws an error
mongodb.initDb((err) => {
    if(err) {
        console.log(err);
    }
    else {
        app.listen(port, () => {console.log(`Database is listening and node running on port ${port}`)});
    }
});