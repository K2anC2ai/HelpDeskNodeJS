// routes/index.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const TicketController = require('../controllers/TicketController');
const authorize = require('../middlewares/authorize');
const dashboardController = require('../controllers/DashboardController');
const KnowledgeBaseController = require('../controllers/KnowledgeBaseController');



router.get('/login', (req, res) => res.render('login'));
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/submit-ticket', TicketController.submitTicket);
router.post('/submit-ticket', TicketController.createTicket);
// แสดงรายการ Ticket ใหม่ (ต้องมีสิทธิ์ 'Assign Ticket')
router.get('/tickets/new', authorize('Assign Ticket'), TicketController.viewNewTickets);

// Assign Ticket (ต้องมีสิทธิ์ 'Assign Ticket')
router.post('/tickets/assign', authorize('Assign Ticket'), TicketController.assignTicket);
router.get('/', dashboardController.getDashboard);

router.get('/track-tickets', TicketController.getTicketList);
router.get('/ticket/:ticketId', TicketController.getTicketDetails);


router.get('/knowledge-base', (req, res) => {
    res.render('knowledge_base', { articles: [] }); // แสดงหน้าพร้อมกับบทความว่างเปล่า
});

router.get('/search-articles', KnowledgeBaseController.searchArticles);

module.exports = router;
