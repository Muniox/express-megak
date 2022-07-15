const express = require('express');
const homeRouter = express.Router();
const {COOKIE_BASES, COOKIE_ADDONS} = require('../data/cookies-data');

homeRouter
    .get('/', (req, res)=> {
        res.render('home/index', {
            cookie: {
                base: 'dark',
                addons: ['coconut'],
            },
            addons: Object.entries(COOKIE_ADDONS),
            bases: Object.entries(COOKIE_BASES),
            //@TODO: We need something to know what are prices of selected base and addons...
        });
    });

module.exports = homeRouter;