const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;
const IPADDRESS = 'localhost';

app.disable('x-powered-by');


//ustawianie ciastka sesyjnego:
app.get('/cookies', (req, res) => {
    console.log(res.headersSent);
    res
        //ciastko jest nagłówkiem i musi zostać wysłane przed odpowiedzią z danymi
        .cookie('cookieName', 'cookieValue')
        .cookie('ciastko-drugie', 'dieta nas nie dotyczy!')
        .send('Hello World!');
});

//ustawianie ciastka niesesyjnego, na dany okres czasu:
app.get('/cookies2', (req, res) => {
    console.log(res.headersSent);
    res
        //ciastko jest nagłówkiem i musi zostać wysłane przed odpowiedzią z danymi
        .cookie('cookieName2', 'cookieValue2', {
            path: '/',
            domain: 'xyz.mydomain.com', //tylko dla danej domeny
            //maxAge lub expires - czas do kiedy ciastko ma być zapamiętane
            // expires: new Date(2022, 8, 1),
            maxAge: 1000 * 60 * 60 * 24, //w milisekundach - w tym przypadku jeden dzień
            //trzeba napisać w polityce prywatności, ile czasu będą przechowywane dane, czyli co, w jakim celu i na ile
            httpOnly: true, //bardzo ważna flaga, sprawia, że JS w przeglądarce, nie ma dostępu do cookie
        })
        .send('Hello World!');
});

app.get('/logout', (req, res) => {
    res
        .clearCookie('cookieName2')
        .send('Logged out.');
});

app.listen(PORT, IPADDRESS, () => {
    console.log(`serwer działa na http://${IPADDRESS}:${PORT}`);
});