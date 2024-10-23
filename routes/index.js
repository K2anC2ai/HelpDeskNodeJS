// routes/index.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const TicketController = require('../controllers/TicketController');

router.get('/login', (req, res) => res.render('login'));
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/submit-ticket', TicketController.submitTicket);
router.post('/submit-ticket', TicketController.createTicket);

module.exports = router;
