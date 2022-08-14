const {getAddonsFromReq} = require("./get-addons-from-req");
const {handlebarsHelpers} = require("./handlebars-helpers");
const {COOKIE_ADDONS, COOKIE_BASES} = require("../data/cookies-data");

function getCookieSettings(req) {
    const { cookieBase: base } = req.cookies;

    const addons = getAddonsFromReq(req);

    const allBases = Object.entries(COOKIE_BASES);
    const allAddons = Object.entries(COOKIE_ADDONS);

    const sum = (base ? handlebarsHelpers.findPrice( allBases, base ) : 0) +
        addons.reduce((prev, curr) => {
            return prev + handlebarsHelpers.findPrice(allAddons, curr);
        },0);

    return {
        //selected stuff
        addons,
        base,

        //calculation
        sum,

        //all possibilities
        allBases,
        allAddons
    };
}

module.exports = {
    getCookieSettings,
};