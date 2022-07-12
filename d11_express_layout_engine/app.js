const express= require('express');
const cookieParser = require('cookie-parser');
const hbs = require('express-handlebars');
const { cookieRouter } = require('./routes/cookie');
const app = express();

app.use(express.static('public'));
app.use(cookieParser());
app.use(express.urlencoded({extended: true}));
app.engine('.hbs', hbs.engine({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use('/cookie', cookieRouter);
app.get('/hi', (req, res) => {
    res.render('home', {
        person: {
            firstName: 'Paweł',
            age: 123
        },
        dates: [1990, 1991, 1992, 1993, 1994]
        //@TODO 8 min
    });
});

app.listen(3000, 'localhost', () => {
    console.log(`http://localhost:3000`);
});