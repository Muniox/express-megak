const express = require('express');
const app = express();

app.get('/app/:math', (req, res) => {
    const {value1, value2} = req.query;
    const {math} = req.params;

    if(Number.isNaN(Number(value1)) || Number.isNaN(Number(value2))) {
        return res.send('Podane wartości nie są liczbami');
    }

    let result;
    switch (math) {
        case 'add':
            result = Number(value1) + Number(value2);
            res.send(result.toString());
            break;
        case 'substract':
            result = value1 - value2;
            res.send(result.toString());
            break;
        case 'multiply':
            result = value1 * value2;
            res.send(result.toString());
            break;
        default:
            res.send('nie ma takiego działania!');
    }

});

app.listen(3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});