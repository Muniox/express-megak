const express = require('express');
const app = express();
const PORT = 3003;
const IPADDRESS = 'localhost';
const nameCheck = require('./Routes/nameCheck');
const nameSet = require('./Routes/nameSet');
const nameShow = require('./Routes/nameShow');

app.use(nameCheck);
app.use(nameSet);
app.use(nameShow);

app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer został uruchomiony na http://${IPADDRESS}:${PORT}`);
});