const express = require('express');
const cookieRouter = express.Router();

cookieRouter
    .post('/set', (req, res) => {
        const { name } = req.body;
        res
            .cookie('name', name, { maxAge: 1000 * 60 * 60 * 24 * 30})
            .send(`
            <!DOCTYPE html>
            <html>
            <body>
                <img src="/banner.png" alt="banner">
            </body>
            </html>
            <hr>
            <p>Zapisano imię.</p>
            `);
    })

    .get('/show', (req, res) => {
        const { name } = req.cookies;
        res.send(`
            <!DOCTYPE html>
            <html>
            <body>
                <img src="/banner.png" alt="banner">
            </body>
            </html>
            <hr>
            <p>${name || 'Brak imienia'}</p>
            `);
    })

    .get('/check', (req, res) => {
        const { name } = req.cookies;
        res.send(name === undefined ? 'Nie ma imienia' : 'Imię jest zapamiętane');
    });


module.exports = {
    cookieRouter,
};