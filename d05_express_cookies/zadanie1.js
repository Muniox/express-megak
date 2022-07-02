const express = require('express');
const app = express();
const PORT = 3000;
const IPADDRESS = 'localhost';


app.get('/:firstNumber/:secondNumber', (req, res) => {
    console.log(req.params);
    const {firstNumber, secondNumber} = req.params;
    const sum = parseInt(firstNumber) + parseInt(secondNumber);
    res.send(sum.toString());
});


app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer został uruchomiony na http://${IPADDRESS}:${PORT}`);
});