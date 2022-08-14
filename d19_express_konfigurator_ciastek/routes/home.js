const express = require('express');
const homeRouter = express.Router();
const {getCookieSettings} = require("../utils/get-cookie-settings");

homeRouter
    .get('/', (req, res) => {
        const {addons, base, allBases, allAddons, sum} = getCookieSettings(req);


        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    });

module.exports = homeRouter;