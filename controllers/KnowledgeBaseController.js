const Knowledge = require('../models/Knowledge');

exports.searchArticles = (req, res) => {
    const query = req.query.q; // รับคำค้นหาจาก URL query
    Knowledge.fetchArticles(query, (err, articles) => {
        if (err) {
            return res.status(500).send('Error fetching articles');
        }
        res.render('knowledge_base', { articles });
    });
};
