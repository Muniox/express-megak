const {readFile, writeFile} = require('fs/promises');
const {join} = require('path');
const {v4: uuidv4} = require('uuid');
const {ClientRecord} = require('../records/client-record');

class Db {
    constructor(dbFileName) {
        this.dbFileName = join(__dirname, '../data', dbFileName);
        void this._load();
    }

    async _load() {
        this._data = JSON.parse(await readFile(this.dbFileName, 'utf8')).map(obj => new ClientRecord(obj));
        console.log(this._data); //pokazuje nam naszą zamianę na obiekty w celu obsługi błędów
    }

    async _save() {
        await writeFile(this.dbFileName, JSON.stringify(this._data, null, 2), {encoding: 'utf8'});
    }

    async create(obj) {
        const id = uuidv4();
        this._data.push(new ClientRecord({
            id,
            ...obj
        }));
        await this._save();
        return id;
    }

    getAll() {
        return this._data;
    }

    getOne(id){
        return this._data.find(oneObj => oneObj.id === id);
    }

    async update(id, newObj) {
        this._data = this._data.map(oneObj => oneObj.id === id ? {...oneObj, ...newObj} : oneObj);
        await this._save();
    }

    async delete(id){
        this._data = this._data.filter(oneObj => oneObj.id !== id);
        await this._save();
    }
}

const db = new Db('client.json');

module.exports = db;