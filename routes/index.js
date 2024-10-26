// routes/index.js
const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/AuthController');
const TicketController = require('../controllers/TicketController');
const authorize = require('../middlewares/authorize');
const dashboardController = require('../controllers/DashboardController');
const KnowledgeBaseController = require('../controllers/KnowledgeBaseController');
const ReportController = require('../controllers/ReportController');
const UserController = require('../controllers/UserController');



router.get('/login', (req, res) => res.render('login'));
router.post('/login', AuthController.login);
router.get('/logout', AuthController.logout);
router.get('/submit-ticket', authorize('Create Ticket'),TicketController.submitTicket);
router.post('/submit-ticket', authorize('Create Ticket'),TicketController.createTicket);
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

router.get('/generate-report',authorize('GenReport'), ReportController.generateReport);



router.post('/tickets/:ticketId/solve', TicketController.startProblemSolving);

// Route สำหรับบันทึกการแก้ไขปัญหาเสร็จ
router.post('/tickets/:ticketId/resolve', TicketController.resolveTicket);


router.get('/tickets/assigned', TicketController.getAssignedTickets);



router.get('/users', authorize('ManageUsers'), UserController.getUserList);

// ฟอร์มเพิ่มผู้ใช้ใหม่
router.get('/users/add', authorize('ManageUsers'), UserController.getAddUserForm);
router.post('/users/add', authorize('ManageUsers'), UserController.addUser);

// ฟอร์มแก้ไขผู้ใช้
router.get('/users/edit/:userId', authorize('ManageUsers'), UserController.getUserById);
router.post('/users/edit/:userId', authorize('ManageUsers'), UserController.updateUser);

// ลบผู้ใช้
router.post('/users/delete/:userId', authorize('ManageUsers'), UserController.deleteUser);

router.get('/edit-queue', TicketController.editQueue);
router.post('/update-queue', TicketController.updateQueue);


module.exports = router;
