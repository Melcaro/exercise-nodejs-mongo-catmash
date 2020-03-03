const CatsRouter = require('./routes/CatsRouter');
const ScoresRouter = require('./routes/ScoresRouter');

function routes(app) {
  app.use('/api/v1/cats', CatsRouter);
  app.use('/api/v1/scores', ScoresRouter);
}

module.exports = routes;
