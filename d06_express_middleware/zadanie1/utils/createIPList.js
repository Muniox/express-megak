const { join } = require('path');
const { readFile, writeFile } = require('fs/promises');

const createIPList = async () => {
    try {
        await readFile(join(__dirname, '../', 'model', 'iplist.json'));
    } catch (error) {
        if (error.code === 'ENOENT') {
            const data = {
               ips: []
            };
            await writeFile(join(__dirname,'../', 'model', 'iplist.json'), JSON.stringify(data));
        }
    }
};

module.exports = createIPList;