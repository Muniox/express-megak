const express = require('express');
const router = express.Router();
const { readFile } = require("fs/promises");
const path = require("path");


const base = path.join(__dirname,'../', 'data');

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}

router.get('/name/check', async (req, res, next) => {
    try {
        const data = await readFile(safeJoin(base, 'data.json'));
        const name = JSON.parse(data.toString());
        if(name !== undefined || name !== '' || name !== null) {
            res.send(true);
        } else {
            res.send(false);
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