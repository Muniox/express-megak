const express = require('express');
const clientRouter = express.Router();
const db = require('../utils/db');

clientRouter

    .get('/', (req, res) => {
        // res.json(db.getAll());
        res.render('client/list-all', {
            clients: db.getAll(),
        });
    })

    .get('/:id', (req, res) => {
        const {id} = req.params;
        res.render('client/one', {
            client: db.getOne(id)
        });
    })

    .post('/', async (req, res) => {
        const {name, mail} = req.json();
        await db.create({name, mail});
        res.message('ok');
    })

    .put('/:id', async (req, res) => {
        const {id} = req.params;
        await db.update(id);
        res.message('ok');
    })

    .delete('/:id', async (req, res) => {
        const {id} = req.params;
        await db.delete(id);
        res.message('ok');
    });

module.exports = clientRouter;
