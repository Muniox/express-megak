const express = require('express');
const {engine} = require('express-handlebars');
const clientRouter = require('./router/client');
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));
app.engine('hbs', engine({
    extname: '.hbs',
    helpers: 'handlebarsHelpers', //poprawić
}));
app.set('view engine', '.hbs');


app.use('/client', clientRouter);


app.listen( 3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});