const CatsStore = require('../store/CatsStore');

async function fetchCatsList(req, res) {
  const { limit } = req.query;
  const catsList = await CatsStore.getCatsList(Number(limit));
  res.json(catsList);
}

module.exports = { fetchCatsList };
