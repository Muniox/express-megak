const app = require('./app');

app.set('port', process.env.PORT || 3000);

app.listen(3000, () => {
    console.log(`serwer nasłuchuje na http://localhost:${process.env.NODE_ENV}`);
});