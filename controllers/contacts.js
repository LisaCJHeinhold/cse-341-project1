//import the database.js
const mongodb = require('../data/database');
//import the objectId from mongo
const ObjectId = require('mongodb').ObjectId;
//create a function that loads the database and prints all the contacts from the database in json format.
const getAll = async (req, res) => {
    const result = await mongodb.getDatabase().db().collection('contacts').find();
    result.toArray().then((contacts) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contacts);
    });
};
//create a functions similar to the getAll but this allows for a single contact to be shown using the objectId/contactId
const getSingle = async (req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('contacts').find({ _id: contactId });
    result.toArray().then((contacts) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(contacts[0]);
    });
};
//export the functions
module.exports = {
    getAll,
    getSingle
};