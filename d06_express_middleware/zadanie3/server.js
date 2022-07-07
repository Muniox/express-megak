const app = require('./app');

const PORT = 3000;
const IPADDRESS = 'localhost';

app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer nasłuchuje na http://${IPADDRESS}:${PORT}`);
});