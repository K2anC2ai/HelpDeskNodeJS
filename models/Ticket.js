// models/Ticket.js
const db = require('../config/db');

class Ticket {
    static create(ticketData, callback) {
        db.query('INSERT INTO ticket SET ?', ticketData, (err, results) => {
            callback(err, results);
        });
    }
}

module.exports = Ticket;
