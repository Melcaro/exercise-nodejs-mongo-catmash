require('dotenv').config();
const CatsStore = require('../store/CatsStore');
const cats = require('./cats.json');

const { images } = cats;
const catsList = images.map(({ url: image }) => {
  return { image, wonMatches: 0, lostMatches: 0 };
});

async function initialize() {
  await CatsStore.initializeDB();
  await CatsStore.removeDB();
  await CatsStore.addCatsList(catsList);
}

try {
  initialize();
} catch (e) {
  console.log(e);
}
