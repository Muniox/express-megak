const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(cors());

app.post('/cookie/set', (req, res) => {
    const { name } = req.body;
    res.cookie('name', name, {maxAge: 1000 * 60 * 60 * 24 * 30});
});

app.get('/cookie/show', (req, res) => {
    //wyświetla wcześniej zapamiętane imię
});

app.get('/cookie/check', (req, res) => {
    //czy zostało zapisane w ciasteczku
});

//jeśli nie ma ciastka to odczytasz je jako undefined

module.exports = app;