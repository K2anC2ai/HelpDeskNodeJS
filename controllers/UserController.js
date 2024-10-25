const User = require('../models/User');

// แสดงรายการผู้ใช้ทั้งหมด
exports.getUserList = (req, res) => {
    User.getAllUsers((err, users) => {
        if (err) return res.status(500).send('Error fetching user list');
        res.render('user_list', { users });
    });
};

// เพิ่มผู้ใช้ใหม่
exports.addUser = (req, res) => {
    const { username, password, roleId } = req.body;

    User.createUser({ username, password, roleId }, (err, result) => {
        if (err) return res.status(500).send('Error creating user');
        res.redirect('/users');
    });
};

// ดึงข้อมูลผู้ใช้เพื่อตรวจสอบก่อนแก้ไข
exports.getUserById = (req, res) => {
    const userId = req.params.userId;
    User.getUserById(userId, (err, user) => {
        if (err || !user) return res.status(404).send('User not found');
        res.render('edit_user', { user });
    });
};

// แก้ไขข้อมูลผู้ใช้
exports.updateUser = (req, res) => {
    const { userId } = req.params;
    const { username, roleId } = req.body;

    User.updateUser(userId, { username, roleId }, (err, result) => {
        if (err) return res.status(500).send('Error updating user');
        res.redirect('/users');
    });
};

// ลบบัญชีผู้ใช้
exports.deleteUser = (req, res) => {
    const { userId } = req.params;
    User.deleteUser(userId, (err) => {
        if (err) return res.status(500).send('Error deleting user');
        res.redirect('/users');
    });
};


exports.getAddUserForm = (req, res) => {
    User.getAllRoles((err, roles) => {
        if (err) return res.status(500).send('Error fetching roles');
        res.render('add_user', { roles }); // ส่ง roles ไปยัง view
    });
};