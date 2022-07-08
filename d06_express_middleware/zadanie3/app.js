const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(cors());
app.use(express.json());

app.post('/cookie/set', async (req, res) => {
    console.log(await req.body);
    const { name } = await req.body;
    res.cookie('name-cookie', name, { maxAge: 1000 * 60 * 60 * 24 * 30 });
    res.json({ message: "zapisano imię" });
});

app.get('/cookie/show', (req, res) => {
    const nameCookie = req.cookies['name-cookie'];
    res.json({ message: `Imię zapisane w ciasteczku to: ${nameCookie}` });
});

app.post('/cookie/check', (req, res) => {
    const nameCookie  = req.cookies['name-cookie'];
    const { name } = req.body
    if (name === nameCookie) {
        res.json({ message: 'Imię zostało już zapisane w ciasteczku' });
    } else {
        res.json({ message: 'Imię nie zostało jeszcze zapisane w ciasteczku' });
    }
    
});

//jeśli nie ma ciastka to odczytasz je jako undefined

module.exports = app;