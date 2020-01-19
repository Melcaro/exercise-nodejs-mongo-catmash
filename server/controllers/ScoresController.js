const CatsStore = require('../store/CatsStore');

async function attributeScores(req, res) {
  const { winnerCatID, loserCatID } = req.body;
  const result = await CatsStore.setMatchScores(winnerCatID, loserCatID);
  return res.status(201).json(result);
}

async function fetchScores(req, res) {
  const scores = await CatsStore.getScores();
  res.json(scores);
}

module.exports = { attributeScores, fetchScores };
