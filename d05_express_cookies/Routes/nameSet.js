const express = require('express');
const router = express.Router();
const {writeFile} = require("fs/promises");
const path = require("path");


router.get('/name/set/:name', async (req, res, next) => {
    const data = JSON.stringify(req.params);
    await writeFile(path.join(__dirname,'../data', 'data.json'), data);
    res.send(JSON.parse(data).name);
    next();
});

module.exports = router;