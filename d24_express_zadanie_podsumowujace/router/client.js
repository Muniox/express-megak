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
        const {name, mail, notes, nextContactAt} = req.body;
        const id = await db.create({name, mail, notes, nextContactAt});
        res.render('client/added', {
            name: req.body.name,
            id,
        });
    })

    .put('/:id', async (req, res) => {
        const {id} = req.params;
        await db.update(id, req.body);
        res.render('client/modified', {
            name: req.body.name,
            id
        });
    })

    .delete('/:id', async (req, res) => {
        const {id} = req.params;
        await db.delete(id);
        res.render('client/deleted');
    })

    .get('/form/add', (req, res) => {
       res.render('client/forms/add');
    })

    .get('/form/edit/:id', (req, res) => {
        const {id} = req.params;
        res.render('client/forms/edit', {
            client: db.getOne(id)
        });
    });

module.exports = clientRouter;
