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
//functon to create a new contact
const createContact = async (req, res) => {
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection('contacts').insertOne(contact);
  if (response.acknowledged) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while creating the contact.');
  }
};
//functon to update a contact
const updateContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const contact = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    favColor: req.body.favColor,
    birthday: req.body.birthday
  };
  const response = await mongodb.getDatabase().db().collection('contacts').replaceOne({_id: contactId }, contact);
  if (response.modifiedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while updating the contact.');
  }
};
//function to delete a contact
const deleteContact = async (req, res) => {
  const contactId = new ObjectId(req.params.id);
  const response = await mongodb.getDatabase().db().collection('contacts').deleteOne({_id: contactId });
  if (response.deletedCount > 0) {
    res.status(204).send();
  } else {
    res.status(500).json(response.error || 'Some error occurred while deleting the user.');
  }
};


//export the functions
module.exports = {
    getAll,
    getSingle,
    createContact,
    updateContact,
    deleteContact
};