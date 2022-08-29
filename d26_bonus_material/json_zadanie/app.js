const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.json());

app.post('/post', (req,res) => {
    // console.log(req.headers);
    res.send(req.body);
});


app.listen(3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});