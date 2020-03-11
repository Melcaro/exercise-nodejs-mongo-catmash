require('dotenv').config();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const auth = require('../services/auth');

const url =
  process.env.NODE_ENV === 'production'
    ? `mongodb+srv://cluster0-t2iuq.mongodb.net/test?retryWrites=true&w=majority`
    : 'mongodb://localhost:27018';
let db = null;

async function initializeDB() {
  const client = new MongoClient(url, { auth, useNewUrlParser: true });
  try {
    await client.connect();
    db = client.db('cats');
  } catch (err) {
    console.log(err.stack);
  }
}

async function removeDB() {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.error(e);
  }
}

async function addCatsList(list) {
  try {
    return await db.collection('catsList').insertMany(list);
  } catch (e) {
    console.error(e);
  }
}

async function getCatsList(limit) {
  try {
    return await db
      .collection('catsList')
      .find()
      .sort({ wonMatches: 1 })
      .limit(limit)
      .toArray();
  } catch (e) {
    console.error(e);
  }
}

async function setMatchScores(winnerCatID, loserCatID) {
  try {
    const setWinnerScore = await db
      .collection('catsList')
      .updateOne({ _id: ObjectID(winnerCatID) }, { $inc: { wonMatches: +1 } });
    const setLoserScore = await db
      .collection('catsList')
      .updateOne({ _id: ObjectID(loserCatID) }, { $inc: { lostMatches: +1 } });

    const result = { setWinnerScore, setLoserScore };
    return result;
  } catch (e) {
    console.error(e);
  }
}

async function getScores() {
  try {
    return await db
      .collection('catsList')
      .find()
      .sort({ wonMatches: -1 })
      .toArray();
  } catch (e) {
    console.error(e);
  }
}

initializeDB();

module.exports = {
  initializeDB,
  removeDB,
  addCatsList,
  getCatsList,
  setMatchScores,
  getScores,
};
