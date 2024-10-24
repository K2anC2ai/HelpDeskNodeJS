// models/Ticket.js
const db = require('../config/db');

class Ticket {
    static getNewTickets(callback) {
        const query = 'SELECT * FROM ticket WHERE status = "NEW"';
        db.query(query, (err, results) => {
            callback(err, results);
        });
    }

    static assign(ticketId, assignedBy, callback) {
        const query = `
            UPDATE ticket 
            SET status = "Assigned", assignedBy = ?, queueId = 1 
            WHERE ticketId = ?
        `;
        db.query(query, [assignedBy, ticketId], (err, result) => {
            callback(err, result);
        });
    }

    static create(ticketData, callback) {
        db.query('INSERT INTO ticket SET ?', ticketData, (err, results) => {
            callback(err, results);
        });
    }
    static fetchTicketsForUser(userId, callback) {
        db.query('SELECT * FROM ticket WHERE userId = ?', [userId], (err, results) => {
            callback(err, results);
        });
    }

    static fetchTicketStatus(ticketId, callback) {
        db.query('SELECT * FROM ticket WHERE ticketId = ?', [ticketId], (err, results) => {
            callback(err, results[0]);
        });
    }
    static markTicketInProgress(ticketId, callback) {
        const sql = 'UPDATE ticket SET status = ? WHERE ticketId = ?';
        db.query(sql, ['In Progress', ticketId], callback);
    }

    // ฟังก์ชันสำหรับบันทึกการแก้ไขปัญหาเสร็จ
    static resolveTicket(ticketId, solution, callback) {
        const sql = 'UPDATE ticket SET status = ?, solution = ? WHERE ticketId = ?';
        db.query(sql, ['Resolved', solution, ticketId], callback);
    }
    static getAssignedTickets(userId, callback) {
        const sql = 'SELECT * FROM ticket WHERE assignedBy  = ?'; // สมมุติว่าใช้ `assignedTo` เพื่อเก็บ userId ของเจ้าหน้าที่
        db.query(sql, [userId], callback);
    }

}

module.exports = Ticket;
