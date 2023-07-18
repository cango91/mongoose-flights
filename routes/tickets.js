const express = require('express');
const router = express.Router();
const ticketsCtrl = require('../controllers/tickets');

// GET /flights/:id/tickets/new (show new ticket form)
router.get('/flights/:id/tickets/new',ticketsCtrl.new);
// DELETE /flights/:id/tickets/ (delete ticket)
router.delete('/flights/:id/tickets',ticketsCtrl.delete);
// POST /flights/:id/tickets/ (create new ticket)
router.post('/flights/:id/tickets',ticketsCtrl.create);

module.exports = router;