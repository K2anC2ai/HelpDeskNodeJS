const Report = require('../models/Report');

exports.generateReport = (req, res) => {
    // ตรวจสอบการเข้าสู่ระบบผู้ดูแล
    Report.fetchStatistics((err, stats) => {
        if (err) {
            return res.status(500).send('Error fetching report data');
        }
        res.render('report', { stats });
    });
};
