const {readFile, writeFile} = require('fs/promises');
const {join} = require('path');
const {v4: uuidv4} = require('uuid');

class Db {
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data', dbFileName);
        this._load();
    }

    async _load() {
        return this._data = JSON.parse(await readFile(this.dbFileName, 'utf8'));
    }

    async create(obj) {
        this._data.push({
            id: uuidv4(),
            ...obj
        });
        await writeFile(this.dbFileName, JSON.stringify(this._data), {encoding: 'utf8'});
    }

    getAll() {
        return this._data;
    }

    async update(id, newObj) {
        this._data = this._data.map(oneObj => oneObj.id === id ? {...oneObj, ...newObj} : oneObj);
        await writeFile(this.dbFileName, JSON.stringify(this._data), {encoding: 'utf8'});
    }
    //użyć filter
    async delete(){
        
    }
}

const db = new Db('client.json');

module.exports = db;