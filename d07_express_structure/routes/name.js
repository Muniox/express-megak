const express = require('express');
const router = express.Router();

router
    .get('/name1', (req, res) => {
        res.send('name1');
    })

    .get('/name2', (req, res) => {
        res.send('name2');
    })

    .get('/name3', (req, res) => {
        res.send('name3');
    });

module.exports = router;