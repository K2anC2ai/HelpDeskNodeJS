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
