// controllers/TicketController.js
const Ticket = require('../models/Ticket');

exports.submitTicket = (req, res) => {
    if (!req.session.userId) {
        return res.redirect('/login');
    }
    res.render('submitTicket');
};

exports.createTicket = (req, res) => {


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


exports.startProblemSolving = (req, res) => {
    const ticketId = req.params.ticketId; // รับ ticketId จากพารามิเตอร์ URL

    // เปลี่ยนสถานะเป็น "In Progress"
    Ticket.markTicketInProgress(ticketId, (err) => {
        if (err) {
            return res.status(500).send('Error marking ticket as in progress');
        }
    });
};
exports.escalateTicket = (req, res) => {
    const ticketId = req.params.ticketId;

    Ticket.markTicketEscalated(ticketId, (err) => {
        if (err) {
            return res.status(500).send('Error escalating ticket');
        }
        res.redirect('/tickets/assigned');
    });
};

// ฟังก์ชันสำหรับบันทึกการแก้ไขปัญหาเสร็จ
exports.resolveTicket = (req, res) => {
    const ticketId = req.params.ticketId; // รับ ticketId จากพารามิเตอร์ URL
    const solution = req.body.solution; // รับการแก้ไขปัญหาจากฟอร์ม

    // เรียกใช้ฟังก์ชัน resolveTicket เพื่อบันทึกการแก้ไขในฐานข้อมูล
    Ticket.resolveTicket(ticketId, solution, (err, result) => {
        if (err) {
            return res.status(500).send('Error resolving ticket');
        }
    });
};




exports.getAssignedTickets = (req, res) => {
    const userId = req.session.userId; // ดึง userId จาก session

    Ticket.getAssignedTickets(userId, (err, tickets) => {
        if (err) {
            return res.status(500).send('Error fetching assigned tickets');
        }

        res.render('assigned_tickets', { tickets });
    });
};
exports.editQueue = (req, res) => {
    Ticket.getNewTickets((err, tickets) => {
        if (err) return res.send('Error fetching tickets');
        res.render('edit_queue', { tickets });
    });
};

// ฟังก์ชันสำหรับอัปเดตลำดับ queue
exports.updateQueue = (req, res) => {
    const updatedQueue = req.body.queue; // สมมุติว่าเป็นอาเรย์ของ queueId และ priorityLevel ที่ส่งจากฟอร์ม

    // Loop ผ่านแต่ละ item ใน updatedQueue เพื่ออัปเดตในฐานข้อมูล
    const updates = updatedQueue.map((item) => {
        return new Promise((resolve, reject) => {
            const { queueId, priorityLevel } = item;
            Ticket.updateQueue(queueId, priorityLevel, (err) => {
                if (err) return reject(err);
                resolve();
            });
        });
    });

    // รอให้ Promise ทั้งหมดเสร็จสิ้น
    Promise.all(updates)
        .then(() => res.send('Queue updated successfully!'))
        .catch((err) => res.status(500).send('Error updating queue'));
};


exports.verifyTicket = (req, res) => {
    const ticketId = req.params.ticketId;

    // อัปเดตสถานะเป็น "Verified"
    Ticket.updateTicketStatus(ticketId, 'Closed', (err, result) => {
        if (err) {
            return res.status(500).send('Error verifying ticket');
        }
        res.redirect('/track-tickets'); // เปลี่ยนเส้นทางหลังจากตรวจสอบเสร็จ
    });
};

exports.notVerifyTicket = (req, res) => {
    const ticketId = req.params.ticketId;

    Ticket.updateTicketStatus(ticketId, 'Reopened', (err, result) => {
        if (err) {
            return res.status(500).send('Error not verifying ticket');
        }
        res.redirect('/track-tickets'); // เปลี่ยนเส้นทางหลังจากไม่ตรวจสอบเสร็จ
    });
};

