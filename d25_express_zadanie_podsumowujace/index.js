const express = require('express');
const {engine} = require('express-handlebars');
const methodOverride = require('method-override');
const clientRouter = require('./router/client');
const homeRouter = require('./router/home');
const {handleError} = require('./utils/errors');
const app = express();

app.use(methodOverride('_method'));
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

app.use(handleError);

app.listen( 3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});