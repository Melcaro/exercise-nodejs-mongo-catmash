const CatsStore = require('../store/CatsStore');
const cats = require('./cats.json');

const { images } = cats;
const catsList = images.map(({url:image}) => {
  return {image,wonMatches:0, lostMatches:0}
});
console.log(catsList);

