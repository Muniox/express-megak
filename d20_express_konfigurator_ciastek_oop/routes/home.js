const express = require('express');

class HomeRouter {
    constructor(cmapp) {
        this.cmapp = cmapp;
        this.router = express.Router();
        this.setUpRoutes();
    }

    setUpRoutes() {
        this.router
            .get('/', this.home);
    }

    home = (req, res) => {
        const {addons, base, allBases, allAddons, sum} = this.cmapp.getCookieSettings(req);

        res.render('home/index', {
            cookie: {
                base,
                addons,
            },
            allBases,
            allAddons,
            sum,
        });
    };
}

module.exports = HomeRouter;
