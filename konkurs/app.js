const express = require('express');
const { engine } = require('express-handlebars');
const { databaseCheck } = require('./utils/databaseCheck');
const { readFile, writeFile } = require('fs/promises');
const { join } = require('path');
const app = express();

//view engine
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');

//middleware
app.use(express.json());
app.use(express.static('public'));

//check if database(json) exist, if not create database
void databaseCheck();

//routes
app.get('/', async (req, res) => {
    const data = JSON.parse(await readFile(join(__dirname, 'data', 'todo-data.json'), {encoding: "utf-8"}));
    res.render('home', {
        data,
    });
});

//create new todos task
app.post('/create', async (req, res) => {
    const data = JSON.parse(await readFile(join(__dirname, 'data', 'todo-data.json'), {encoding: "utf-8"}));
    const { text } = req.body;
    console.log(text);
    const getID = data['arrayData'][data['arrayData'].length - 1].id;
    const item = {
        "id": getID + 1,
        "content": text,
        "completed": false,
        "not-cleared": true
    };
    data['arrayData'].push(item);
    await writeFile(join(__dirname, 'data', 'todo-data.json'), JSON.stringify(data, null,' '), {encoding: "utf-8"} );
    res.json(
        item
    );
});

app.put('/completed/:id', async (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(await readFile(join(__dirname, 'data', 'todo-data.json'), {encoding: "utf-8"}));
    const arrayElement = data['arrayData'].find( item => item.id === Number(id));
    if (!arrayElement) {
        res.json({
            message: "Index cannot be found!"
        });
    } else {
        const elementIndex = data['arrayData'].indexOf(arrayElement);
        data['arrayData'][elementIndex].completed = !data['arrayData'][elementIndex].completed;
        await writeFile(join(__dirname, 'data', 'todo-data.json'), JSON.stringify(data, null,' '), {encoding: "utf-8"} );
        res.json({
            toggle: true
        });
    }
});

app.delete('/delete/:id', async (req, res) => {
    const { id } = req.params;
    const data = JSON.parse(await readFile(join(__dirname, 'data', 'todo-data.json'), {encoding: "utf-8"}));
    const arrayElement = data['arrayData'].find( item => item.id === Number(id)); //@TODO przypatrzeć się bo coś nie chce przejść na undefined
    if (!arrayElement) {
        res.json({
            message: "Index cannot be found!"
        });
    } else {
        const elementIndex = data['arrayData'].indexOf(arrayElement);
        data['arrayData'][elementIndex]["not-cleared"] = !data['arrayData'][elementIndex]["not-cleared"];
        await writeFile(join(__dirname, 'data', 'todo-data.json'), JSON.stringify(data, null,' '), {encoding: "utf-8"} );
        res.json({
            delete: true
        });
    }
});


app.get('*', function(req, res){
    res
        .status(404)
        .render('404');
});


module.exports = app;