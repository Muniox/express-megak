const express = require('express');
const homeRouter = express.Router();
const {COOKIE_BASES, COOKIE_ADDONS} = require('../data/cookies-data');
const { handlebarsHelpers } = require('../utils/handlebars-helpers');
const {getAddonsFromReq} = require("../utils/get-addons-from-req");

homeRouter
    .get('/', (req, res) => {
        const { cookieBase } = req.cookies;

        const addons = getAddonsFromReq(req);

        console.log((cookieBase ? handlebarsHelpers.findPrice( Object.entries(COOKIE_BASES), cookieBase ) : 0));
        const sum = (cookieBase ? handlebarsHelpers.findPrice( Object.entries(COOKIE_BASES), cookieBase ) : 0) +
            addons.reduce((prev, curr) => {
                return prev + handlebarsHelpers.findPrice(Object.entries(COOKIE_ADDONS), curr);
            },0);

        res.render('home/index', {
            cookie: {
                base: cookieBase,
                addons: addons,
            },
            bases: Object.entries(COOKIE_BASES),
            addons: Object.entries(COOKIE_ADDONS),
            sum,
        });
    });

module.exports = homeRouter;