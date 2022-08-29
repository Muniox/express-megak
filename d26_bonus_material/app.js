const express = require('express');
const path = require('path');
const app = express();

// app.use(express.static('public'));

const PORT = 3000;
const ADDRESS = 'localhost';

app.get('/scripts/script.js', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'scripts', 'script.js'));
});

app.get('/styles/style.css', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'styles', 'style.css'));
});

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/question', (req, res) => {
    // /question?a=2&b=4
    console.log(req.method);
    console.log(req.ips);
    console.log(req.ip);
    console.log(req.path);
    console.log(req.url);
    console.log(req.originalUrl);
    console.log(req.protocol);
    console.log(req.secure);
    console.log(req.hostname);
});

app.listen(PORT, ADDRESS, () => {
    console.log(`aplikacja nasłuchuje na http://${ADDRESS}:${PORT}`);
});