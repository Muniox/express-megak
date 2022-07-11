const express = require('express');
const calcRouter = require('./routes/calc');
const app = express();

app.use(express.static());
app.use(express.json());

app.use('/calc', calcRouter);


app.listen(3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});