const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const auth = require('../services/auth');

const url = 'mongodb://192.168.99.100:27018';
let db = null;

async function initializeDB() {
  const client = await MongoClient.connect(url, {
    auth,
    poolSize: 10,
    useNewUrlParser: true,
  });
  db = client.db('cats');
}

async function removeDB() {
  try {
    return await db.dropDatabase();
  } catch (e) {
    console.log(e);
  }
}

async function addCatsList(list) {
  try {
    return await db.collection('catsList').insertMany(list);
  } catch (e) {
    console.log(e);
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
    console.log(e);
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
    console.log(e);
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
    console.log(e);
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
