const express = require('express');
const router = express.Router();
const { readFile } = require("fs/promises");
const path = require("path");


router.get('/name/check', async (req, res, next) => {
    try {
        const data = await readFile(path.join(__dirname,'../data', 'data.json'));
        const name = JSON.parse(data.toString());
        if(name !== undefined || name !== '' || name !== null) {
            res.send('There is a name saved');
        } else {
            res.send('There is no name saved');
        }
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