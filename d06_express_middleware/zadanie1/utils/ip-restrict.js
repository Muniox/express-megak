const {join} = require("path");
const { readFile} = require("fs/promises");
const { writeFile } = require("fs/promises");
  

class IpRestrict {
    constructor() {
        this.ipsThatVoted;
    }

    async getIPs() {
        const data = JSON.parse(await readFile(join(__dirname, '../', 'model', 'iplist.json'), { encoding: 'utf-8' }));
        this.ipsThatVoted = data;
    }

    async saveIPs(ip) {
        // const data = JSON.parse(await readFile(join(__dirname, '../', 'model', 'iplist.json'), { encoding: 'utf-8' }));
        this.ipsThatVoted.ips.push(ip);
        await writeFile(join(__dirname, '../', 'model', 'iplist.json'), JSON.stringify(this.ipsThatVoted), { encoding: 'utf-8' });
    }

    async check(ip) {
        if (this.ipsThatVoted.ips.includes(ip)) {
            return false;
        }

        return true;
    }
}

module.exports = {
    IpRestrict,
};