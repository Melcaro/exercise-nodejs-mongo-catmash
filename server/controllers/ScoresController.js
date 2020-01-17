const CatsStore = require('../store/CatsStore');

async function attributeScores(req, res) {
  const { winnerCatID, loserCatID } = req.body;
  const result = await CatsStore.setMatchScores(winnerCatID, loserCatID);
  return res.status(201).json(result);
}

module.exports = { attributeScores };
