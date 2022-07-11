const express = require('express');
const voteRouter = express.Router();
const { IpRestrict } = require('../utlis/ip-restricter');

const votes = {
    yes: 0,
    no: 0,
};

const  ipRestrict = new IpRestrict();

voteRouter

    .get('/check', (req, res) => {
        const info = Object.entries(votes).map(ar => `Votes on ${ar[0]}: ${ar[1]}`).join('</br>');
        res.send(info);
    })

    .get('/:voteName', (req, res) => {
        if (!ipRestrict.check(req.ip)) {
            res.status(403).send('You have already voted!');
            return;
        }

        const { voteName } = req.params;
        if (typeof votes[voteName] === 'undefined') {
            votes[voteName] = 0;
        }
        votes[voteName]++;
        res.send('Thank you, for your vote!');
    });




module.exports = {
    voteRouter
};
