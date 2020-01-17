import axios from 'axios';

export async function fetchCatsList() {
  return await axios.get('/api/v1/cats', { params: { limit: 10 } });
}

export async function sendMatchResults(winnerCatID, loserCatID) {
  return await axios.post('/api/v1/scores', { winnerCatID, loserCatID });
}
