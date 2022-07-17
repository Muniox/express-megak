const { writeFile, readFile } = require('fs/promises');
const { join } = require('path');

const databaseCheck = async () => {
    try {
        const data = JSON.parse(await readFile(join(__dirname,'../', 'data', 'todo-data.json'), {encoding: "utf-8"}));
        return data;
    } catch (error) {
        if (error.code === 'ENOENT') {
            await writeFile(join(__dirname,'../', 'data', 'todo-data.json' ), JSON.stringify({data: []}), {encoding: "utf-8"});
        } else {
            console.error(error);
        }
    }
};

module.exports = {
    databaseCheck
};