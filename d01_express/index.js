const express = require('express');

const PORT = 3000;
const ADDRESS = '127.0.0.1';

const app = express();

app.get('/', (req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    });
    res.write('działa');
   res.end();
});

app.get('/hello', (req, res) => {
    console.log('cześć');
    res.end();
});

app.post('/', (req, res) => {
    console.log('dodaj nową książkę do listy');
    res.end();
});

app.listen(PORT, ADDRESS, () => {
     console.log(`serwer działa na http://${ADDRESS}:${PORT}`);
 });


//po staremu jak było w node:
// const { createServer } = require('http');
// app.on('request', (req, res) => {
//     res.writeHead(200, {
//         'Content-type': 'text/html; charset=utf-8'
//
//     } );
//     res.end('działa');
// });
//
// app.listen(PORT, ADDRESS, () => {
//     console.log(`serwer działa na http://${ADDRESS}:${PORT}`);
// });