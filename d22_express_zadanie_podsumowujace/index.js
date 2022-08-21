const express = require('express');
const {engine} = require('express-handlebars');
const clientRouter = require('./router/client');
const homeRouter = require('./router/home');
const db = require('./utils/db');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.engine('hbs', engine({
    extname: '.hbs',
    //helpers: 'handlebarsHelpers',
}));
app.set('view engine', '.hbs');

app.use('/', homeRouter);
app.use('/client', clientRouter);
app.get('/test', async (req, res) => {
    await db.update("1d4bd0b1-f754-44c5-a91f-1f01d823c3c0", {
        name: 'Tester',
        mail: 'example@com.pl'
    });
    res.send('ok');
});

app.listen( 3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});