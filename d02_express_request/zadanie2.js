// const {createServer} = require('http');
// const server = createServer();
//
// server.on('request', (req, res) => {
//     if (req.method === 'GET' && req.url === '/'){
//         res.writeHead(200, {
//             'Content-Type': 'text/html; charset=utf-8',
//         });
//         const checkAgent = req.headers['user-agent'];
//         res.end(`Cześć przeglądarko ${checkAgent}`);
//     } else {
//         res.writeHead(404, {
//             'Content-Type': 'text/plain',
//         });
//         res.end('error 404, not found');
//     }
// });
// server.listen(3000,'localhost', ()=> {
//     console.log('to serwer node przy użyciu modułu http');
// });

/**
 * Użycie expressa
 * */
const express = require('express');

const app = express();

app.get('/', (req, res) => {
    const checkAgent = req.get('user-agent');
    res.send(`Cześć przeglądarko ${checkAgent}`);
});

app.listen(3000, 'localhost', () => {
    console.log('to serwer express stworzony przy użyciu frameworka express');
});