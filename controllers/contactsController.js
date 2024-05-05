const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb'); 

const getContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db("cse341").collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); // we just need the first one (the only one)
  });
};

const getContactById = async (req, res, next) => {
 
  const contactId = req.params.id;

  if (!ObjectId.isValid(contactId)) {
    return res.status(400).json({ message: 'Invalid contact ID format' });
  }

  const db = mongodb.getDb().db("cse341");
  const collection = db.collection('contacts');
  const result = await collection.findOne({ _id: new ObjectId(contactId) });

  if (!result) {
    return res.status(404).json({ message: 'Contact not found' });
  }

  res.status(200).json(result);
   
};


module.exports = {
  getContacts,
  getContactById
};
