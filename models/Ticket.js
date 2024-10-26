// models/Ticket.js
const db = require('../config/db');

class Ticket {
    static getNewTickets(callback) {
        const query = `
            SELECT t.*, q.priorityLevel 
            FROM ticket t 
            LEFT JOIN queue q ON t.queueId = q.queueId 
            WHERE t.status = "NEW"
        `;
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
            if (err) return callback(err);
            
            // คำนวณ priorityLevel โดยการนับจำนวน queue ปัจจุบัน
            db.query('SELECT COUNT(*) AS count FROM queue', (err, countResult) => {
                if (err) return callback(err);
        
                const newPriorityLevel = countResult[0].count + 1; // เพิ่ม 1 เพื่อเป็นลำดับถัดไป
                
                // สร้าง queue entry ใหม่
                const newQueueEntry = {
                    ticketId: results.insertId,
                    priorityLevel: newPriorityLevel // ใช้ค่า count เป็น priorityLevel
                };
                
                // เพิ่ม queue entry ใหม่
                db.query('INSERT INTO queue SET ?', newQueueEntry, (err, queueResult) => {
                    if (err) return callback(err);
    
                    // อัปเดต queueId ในตาราง ticket
                    db.query('UPDATE ticket SET queueId = ? WHERE ticketId = ?', [queueResult.insertId, results.insertId], (err) => {
                        if (err) return callback(err);
                        callback(null, results); // ส่งผลลัพธ์กลับไป
                    });
                });
            });
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

    static updateQueue(queueId, priorityLevel, callback) {
        const sql = 'UPDATE queue SET priorityLevel = ? WHERE queueId = ?';
        db.query(sql, [priorityLevel, queueId], callback);
    }
}



module.exports = Ticket;
