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

    async _save() {
        await writeFile(this.dbFileName, JSON.stringify(this._data, null, '\\n'), {encoding: 'utf8'});
    }

    async create(obj) {
        this._data.push({
            id: uuidv4(),
            ...obj
        });
        await this._save();
    }

    getAll() {
        return this._data;
    }

    getOne(id){
        console.log(this._data.find(oneObj => oneObj.id === id));
        return this._data.find(oneObj => oneObj.id === id);
    }

    async update(id, newObj) {
        this._data = this._data.map(oneObj => oneObj.id === id ? {...oneObj, ...newObj} : oneObj);
        await this._save();
    }

    async delete(id){
        this._data = this._data.filter(oneObj => oneObj !== id);
        await this._save();
    }
}

const db = new Db('client.json');

module.exports = db;