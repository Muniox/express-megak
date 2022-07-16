const express = require('express');
const homeRouter = express.Router();
const {COOKIE_BASES, COOKIE_ADDONS} = require('../data/cookies-data');
const { handlebarsHelpers } = require('../handlebars-helpers');

homeRouter
    .get('/', (req, res) => {
        const { cookieBase } = req.cookies;
        console.log((cookieBase ? handlebarsHelpers.findPrice( Object.entries(COOKIE_BASES), cookieBase ) : 0));
        const sum = (cookieBase ? handlebarsHelpers.findPrice( Object.entries(COOKIE_BASES), cookieBase ) : 0) +
            ['coconut', 'honey'].reduce((prev, curr) => {
                return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr);
            },0);

        res.render('home/index', {
            cookie: {
                base: cookieBase,
                addons: ['coconut', 'honey'],
            },
            addons: Object.entries(COOKIE_ADDONS),
            bases: Object.entries(COOKIE_BASES),
            sum,
        });
    });

module.exports = homeRouter;