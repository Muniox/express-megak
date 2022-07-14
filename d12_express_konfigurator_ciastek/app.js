const express = require('express');
const cookieParser = require('cookie-parser');
const { engine } = require('express-handlebars');
const configuratorRouter = require('./routes/configurator');
const orderRouter = require('./routes/order');
const homeRouter = require('./routes/home');


const app = express();
app.use(cookieParser());
app.use(express.json());
app.use(express.static('public'));
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

app.use('/', homeRouter);
app.use('/order', orderRouter);
app.use('/configurator', configuratorRouter);

app.listen(3000, 'localhost', () => {
    console.log(`serwer nasłuchuje na http://localhost:3000`);
});