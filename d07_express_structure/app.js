const express = require('express');
const name = require('./routes/name');
const main = require('./routes/index');
const cookieParser = require('cookie-parser');
const rateLimit = require('express-rate-limit');
const app = express();

const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 10, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
});

//Middleware
app.use(express.json());
app.use(express.static('public')); // ścieżka '/' jest zawsze zarezerwowana dla index z public!
app.use(cookieParser());
app.use(limiter);

//Routes
app.use('/show', name);
app.use(main);

//server
const PORT = 3000;
const IPADDRESS = 'localhost';
app.listen(PORT, IPADDRESS, () =>{
    console.log(`serwer nasłuchuje na http://${IPADDRESS}:${PORT}`);
});