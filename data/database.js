//import dotenv to set up the .env file which holds the MONGODB_URL
const dotenv = require('dotenv');
dotenv.config();
//import the MongoClient from mongo
const MongoClient = require('mongodb').MongoClient;
//set the database variable
let database;
//create a function to initalize the database, check if database is init, if not the get it, catch an errors.
const initDb = (callback) => {
    if (database) {
        console.log('Db is already initialized!');
        return callback(null, database);
    }
    MongoClient.connect(process.env.MONGODB_URL)
        .then((client) => {
            database = client;
            callback(null, database);
        })
        .catch((err) => {
            callback(err);
        });
};
//create function to get the database, check if it is init, if not return the database
const getDatabase = () => {
    if (!database) {
        throw Error('Database not initialized')
    }
    return database;
};
//export functions
module.exports = {
    initDb,
    getDatabase
};