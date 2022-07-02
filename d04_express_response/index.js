const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const IPADDRESS = 'localhost';

app.disable('x-powered-by');

// app.get('/', (req, res) => {
//     res.sendFile(path.resolve('meme.jpg'));
// });

//Pierwszy preferowany sposób używania zabezpieczonych ścieżek
app.get('/', (req, res) => {
    //res.set ustawiamy nagłówki sami, zamiast automatycznie przez expressa (tutaj dodajemy kolejny nagłówek)
    //p.s. bez polskich znaków ofc
    res
        //chain method :)
        .set({
            'X-Mega-Kurs': 'I Like Mega Kurs',
            'X-kolejny-naglowek': 'My header',
        })
        .sendFile('meme.jpg', {
            root: path.join(__dirname, 'files'),
        });

    //właściwość headerSent
    console.log(res.headersSent);
});

//attachment (jest podkreślone, należy sprawdzić, czy wymaga kolejnego parametru)
app.get('/download', (req, res) => {
    res.attachment('meme.jpg', {
        root: path.join(__dirname, 'files'),
    });
    res.end();
});

app.get('/cookies', (req, res) => {
    console.log(res.headersSent);
    res
        //ciastko jest nagłówkiem i musi zostać wysłane przed odpowiedzią z danymi
        .cookie('cookieName', 'cookieValue')
        .cookie('ciastko-drugie', 'dieta nas nie dotyczy!')
        .send('Hello World!');
});


app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer działa na http://${IPADDRESS}:${PORT}`);
});