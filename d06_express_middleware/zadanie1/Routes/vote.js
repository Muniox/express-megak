const express = require('express');
const {join} = require("path");
const {readFile, writeFile} = require("fs/promises");
const router = express.Router();

router
    .put('/yes', async (req, res) => {
        const data = await readFile(join(__dirname,'../', 'model', 'data.json'), {encoding: 'utf-8'});
        const newData = JSON.parse(data);
        newData.yes += 1;
        await writeFile(join(__dirname,'../', 'model', 'data.json'), JSON.stringify(newData), {encoding: 'utf-8'});
        res.json({message: "Dziękujemy za głos!"});
    })

    .put('/no', async (req, res) => {
        const data = await readFile(join(__dirname,'../', 'model', 'data.json'), {encoding: 'utf-8'});
        const newData = JSON.parse(data);
        newData.no += 1;
        await writeFile(join(__dirname,'../', 'model', 'data.json'), JSON.stringify(newData), {encoding: 'utf-8'});
        res.json({message: "Dziękujemy za głos!"});
    })

    .get('/check', async (req, res) => {
        const data = await readFile(join(__dirname,'../', 'model', 'data.json'), {encoding: 'utf-8'});
        res.json(data);
    });

module.exports = router;