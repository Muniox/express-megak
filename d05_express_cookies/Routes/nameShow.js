const express = require('express');
const router = express.Router();
const path = require("path");
const {readFile} = require("fs/promises");


router.get('/name/show', async (req, res, next) => {
    try {
        const data = await readFile(path.join(__dirname,'../data', 'data.json'));
        const name = JSON.parse(data.toString()).name;
        res.send(name);
    } catch (error) {
        if(error.code === 'ENOENT'){
            res.send('nie stworzono pliku z imionami');
        } else {
            res.send(`nieobsłużony wyjątek, ${error}`);
        }
    }
    next();
});

module.exports = router;