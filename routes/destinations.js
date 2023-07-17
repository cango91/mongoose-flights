const express = require('express');
const destinationsCtrl = require('../controllers/destinations');
const router = express.Router();

router.post('/flights/:id/destinations',destinationsCtrl.create);

module.exports = router;