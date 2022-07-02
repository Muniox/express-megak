const express = require('express');
const router = express.Router();
const {writeFile} = require("fs/promises");
const path = require("path");


const base = path.join(__dirname,'../', 'data');

function safeJoin(base, target) {
    const targetPath = '.' + path.normalize('/' + target);
    return path.resolve(base, targetPath);
}

router.get('/name/set/:name', async (req, res, next) => {
    const data = JSON.stringify(req.params);
    await writeFile(safeJoin(base, 'data.json'), data);
    res.send(JSON.parse(data).name);
    next();
});

module.exports = router;