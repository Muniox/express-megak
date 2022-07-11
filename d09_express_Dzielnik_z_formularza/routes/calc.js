const express = require('express');
const calcRouter = express.Router();

calcRouter
    .post('/check', (req, res) => {
        const { numberA, numberB } = req.body;
        res.json(); //@TODO
    });

module.exports = calcRouter;