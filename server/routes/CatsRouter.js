const router = require('express').Router();
const CatsCtrl = require('../controllers/CatsController');

router.get('/', CatsCtrl.fetchCatsList);

module.exports = router;
