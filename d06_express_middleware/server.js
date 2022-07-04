const app = require('./app');

app.set('port', process.env.PORT || 7000);
const IPADDRESS = 'localhost';


const server = app.listen(app.get('port'), () => {
    console.log(`Listening on http://${IPADDRESS}:${ server.address()['port'] }`);
});