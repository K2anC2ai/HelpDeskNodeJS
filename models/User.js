// models/User.js
const db = require('../config/db');

class User {
    static findByUsername(username, callback) {
        db.query('SELECT * FROM user WHERE username = ?', [username], (err, results) => {
            callback(err, results[0]);
        });
    }

    static getUserRole(userId, callback) {
        db.query('SELECT roleId FROM userroles WHERE userId = ?', [userId], (err, results) => {
            callback(err, results);
        });
    }

    
    static getUserRoleName(roleId, callback) {
        db.query('SELECT roleName FROM role WHERE roleId = ?', [roleId], (err, results) => {
            callback(err, results[0] ? results[0].roleName : null);
        });
    }


    static getUserPermissions(roleId, callback) {
        db.query('SELECT p.permissionName FROM rolepermissions rp JOIN permission p ON rp.permissionId = p.permissionId WHERE rp.roleId = ?', [roleId], (err, results) => {
            callback(err, results);
        });
    }
}

module.exports = User;
