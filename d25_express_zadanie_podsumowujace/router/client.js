const express = require('express');
const clientRouter = express.Router();
const db = require('../utils/db');
const {NotFoundError} = require("../utils/errors");


clientRouter

    .get('/', (req, res) => {
        res.render('client/list-all', {
            clients: db.getAll(),
        });
    })

    .get('/:id', (req, res) => {
        const client = db.getOne(req.params.id);

        if (!client) {
            throw new NotFoundError();
        }

        res.render('client/one', {
            client
        });
    })

    .post('/', async (req, res, next) => {
        try{
            // asdasdasd();
            const {name, mail, notes, nextContactAt} = req.body;
            const id = await db.create({name, mail, notes, nextContactAt});
            res
                .status(201)
                .render('client/added', {
                name: req.body.name,
                id,
            });
        } catch (error) {
            next(error);
        }

    })

    .put('/:id', async (req, res) => {
        const {id} = req.params;

        const client = db.getOne(id);

        if (!client) {
            throw new NotFoundError();
        }

        await db.update(id, req.body);
        res.render('client/modified', {
            name: req.body.name,
            id
        });
    })

    .delete('/:id', async (req, res) => {
        const {id} = req.params;

        const client = db.getOne(id);

        if (!client) {
            throw new NotFoundError();
        }

        await db.delete(id);
        res.render('client/deleted');
    })

    .get('/form/add', (req, res) => {
       res.render('client/forms/add');
    })

    .get('/form/edit/:id', (req, res) => {
        const client = db.getOne(req.params.id);

        if (!client) {
            throw new NotFoundError();
        }

        res.render('client/forms/edit', {
            client
        });
    });

module.exports = clientRouter;
