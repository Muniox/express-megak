const { join } = require('path');
const { readFile, writeFile } = require('fs/promises');

const createDatabaseFile = async () => {
    try {
        await readFile(join(__dirname, '../', 'model', 'data.json' ));
    } catch (error) {
        if (error.code === 'ENOENT') {
            const data = {
                yes: 0,
                no: 0
            };
            await writeFile(join(__dirname, '../', 'model', 'data.json'), JSON.stringify(data));
        }
    }
};

module.exports = createDatabaseFile;