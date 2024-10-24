// controllers/TicketController.js
const Ticket = require('../models/Ticket');

exports.submitTicket = (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('submitTicket');
};

exports.createTicket = (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }

    // ตรวจสอบว่าผู้ใช้มีสิทธิ์ 'Create Ticket'
    if (!req.session.permissions.includes('Create Ticket')) {
        return res.send('Permission denied: You do not have the rights to create a ticket.');
    }

    const ticketData = {
        userId: req.session.userId,
        description: req.body.description,
        status: 'NEW',
        createdDate: new Date()
    };
    
    Ticket.create(ticketData, (err, result) => {
        if (err) return res.send('Error saving ticket');
        res.render('confirmation', { ticketId: result.insertId });
    });
};

exports.viewNewTickets = (req, res) => {
    if (!req.session.userId) return res.redirect('/login');

    // ดึงข้อมูล Ticket ที่มีสถานะเป็น 'NEW'
    Ticket.getNewTickets((err, tickets) => {
        if (err) return res.send('Error fetching tickets');
        res.render('newTickets', { tickets });
    });
};

exports.assignTicket = (req, res) => {
    if (!req.session.userId) return res.redirect('/login');  // ตรวจสอบว่ามีการล็อกอินแล้ว

    const { ticketId } = req.body;
    const assignedBy = req.session.userId;  // บันทึก userId ของผู้ทำการ Assign

    Ticket.assign(ticketId, assignedBy, (err, result) => {
        if (err) return res.status(500).send('Error assigning ticket');
        res.send('Ticket assigned successfully!');
    });
};


exports.getTicketList = (req, res) => {
    const userId = req.session.userId; // ดึง userId จาก session
    Ticket.fetchTicketsForUser(userId, (err, tickets) => {
        if (err) {
            return res.status(500).send('Error fetching tickets');
        }
        res.render('track_ticket', { tickets });
    });
};

exports.getTicketDetails = (req, res) => {
    const ticketId = req.params.ticketId;
    Ticket.fetchTicketStatus(ticketId, (err, ticket) => {
        if (err || !ticket) {
            return res.status(404).send('Ticket not found');
        }
        res.render('ticket_details', { ticket });
    });
};