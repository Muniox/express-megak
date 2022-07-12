const express = require('express');
const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res) => {
        const { numberA, numberB } = req.body;

        res.json({
            divider: numberA % numberB === 0
        });
    });

module.exports = calcRouter;