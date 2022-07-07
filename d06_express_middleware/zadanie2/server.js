const app = require('./app');

const IPADDRESS = 'localhost';
const PORT = 3000;

app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer nasłuchuje na http://${IPADDRESS}:${PORT}`);
});