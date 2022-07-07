const express = require('express');
const voteRute = require('./routes/vote');
const createDatabaseFile = require('./utils/createJSONDatabase');
const createIPList = require('./utils/createIPList');
const cors = require('cors');
const app = express();

//Create IP list id data no exist
(async () => await createIPList)();

//Create Database if data no exist
(async () => await createDatabaseFile)();

//Middleware
app.use(express.static('public'));
app.use(cors());
app.use('/vote', voteRute);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

module.exports = app;