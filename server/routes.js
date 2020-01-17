const CatsRouter = require('./routes/CatsRouter');

function routes(app) {
  app.use('/api/v1/cats', CatsRouter);
}

module.exports = routes;
