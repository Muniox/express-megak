const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();

//middleware
app.use(express.json()); //rozkodowanie przychodzącego JSON'a
app.use(express.static('public')); //pliki statyczne serwowane przez serwer
app.use(cookieParser()); //middleware obsługujące ciasteczka

//pamiętaj, że z front-endu należy wysłać nagłówek Content-Type: application/json
// {
//     "name": "Javascript i wzorce projektowe",
//     "version": 2
// }

app.post('/book', (req, res) => {
    console.log(req.body);
    console.log(req.cookies);
    res.send('OK.');
});





module.exports = app;
