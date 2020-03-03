const router = require('express').Router();
const ScoresCtrl = require('../controllers/ScoresController');

router.get('/', ScoresCtrl.fetchScores);

router.post('/', ScoresCtrl.attributeScores);

module.exports = router;
