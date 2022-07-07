const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.static('public'));
app.use(cors());
app.use(express.json());

// app.get('/:A/:B', (req, res) => {
//     const { A, B } = req.params;
//     parseInt(A)%parseInt(B) === 0 ? res.json({message: 'jest dzielnikiem'}) : res.json({message: 'nie jest dzielnikiem'});
// });

app.post('/', (req, res) => {
    const {A, B} = req.body;
    console.log(A, B);
    parseInt(A)%parseInt(B) === 0 ? res.json({message: 'jest dzielnikiem'}) : res.json({message: 'nie jest dzielnikiem'});
});

module.exports = app;