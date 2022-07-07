const express = require('express');
const voteRute = require('./routes/vote');
const createDatabaseFile = require('./utils/createJSONDatabase');
const createIPList = require('./utils/createIPList');
const cors = require('cors');
const app = express();

//Create IP list if data no exist
void createIPList();

//Create Database if data no exist
void createDatabaseFile();

//Middleware
app.use(express.static('public'));
app.use(cors());
app.use('/vote', voteRute);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

module.exports = app;