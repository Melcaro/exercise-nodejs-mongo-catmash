import axios from 'axios';

export async function fetchCatsList() {
  return await axios.get('/api/v1/cats', { params: { limit: 10 } });
}
