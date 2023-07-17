const express = require('express');
const router = express.Router();
const flightsCtrl = require('../controllers/flights');

/* GET flights listing. */
router.get('/', flightsCtrl.getAll);
/* GET new flight */
router.get('/new', flightsCtrl.new);
/* GET flight details */
router.get('/:id',flightsCtrl.show);
/* POST create flight */
router.post('/', flightsCtrl.create);

module.exports = router;
