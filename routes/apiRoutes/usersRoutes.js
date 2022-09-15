const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.post('/', (req, res) => {
    // data validation
    const errors = inputCheck(req.body, 'first_name', 'last_name', 'email');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }
    const sql = `INSERT INTO users (first_name, last_name, email) VALUES (?, ?, ?)`;
    const params = [req.body.first_name, req.body.last_name, req.body.email];
    db.query(sql, params, (err, result) => {
        if (err) {
            res.status(400).json({ error: err });
            return;
        }
        res.json({
            message: 'success',
            data:  result
        });
    });
});

module.exports = router;