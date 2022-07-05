const express = require('express');
const voteRute = require('./Routes/vote');
const createDatabaseFile = require('./utils/createJSONDatabase');
const cors = require('cors');
const app = express();

//Create Database if data no exist
(async () => await createDatabaseFile)();

//Middleware
app.use(express.static('Public'));
app.use(cors());
app.use('/vote', voteRute);

app.get('/', (req, res) => {
    res.sendFile('index.html');
});

module.exports = app;