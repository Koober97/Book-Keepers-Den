const express = require('express');
const router = express.Router();
const db = require('../../db/connection');
const inputCheck = require('../../utils/inputCheck');

router.post('/reviews', ({ body }, res) => {
    // data validation
    const errors = inputCheck(body, 'first_name', 'last_name', 'book_name', 'review');
    if (errors) {
        res.status(400).json({ error: errors });
        return;
    }

    const sql = `SELECT users.*
                LEFT JOIN users ON users.first_name = first_name
                LEFT JOIN users ON users.last_name = last_name
                `
        db.query(sql, (err,rows) => {
            if (err) {
                res.status(500).json({ error: err.message });
                return;
            }
            res.json({
                message: 'success',
                data: rows
            })
        });
});