const db = require('../config/db');

class Report {
    static fetchStatistics(callback) {
        const sql = `SELECT 
                        COUNT(*) AS totalTickets, 
                        SUM(CASE WHEN status = 'Assigned' THEN 1 ELSE 0 END) AS assignedTickets,
                        SUM(CASE WHEN status = 'Resolved' THEN 1 ELSE 0 END) AS resolvedTickets,
                        SUM(CASE WHEN status = 'Closed' THEN 1 ELSE 0 END) AS closedTickets
                     FROM ticket`;
        
        db.query(sql, (err, results) => {
            callback(err, results[0]);
        });
    }
}

module.exports = Report;
