const router = require('express').Router();
const ScoresCtrl = require('../controllers/ScoresController');

router.post('/', ScoresCtrl.attributeScores);
module.exports = router;
