const {join} = require("path");
const { readFile} = require("fs/promises");
const { writeFile } = require("fs/promises");
  

class IpRestrict {
    constructor() {
        this.ipsThatVoted = {"ips": []};
    }

    async getIPs() {
        this.ipsThatVoted = JSON.parse(await readFile(join(__dirname, '../', 'model', 'iplist.json'), { encoding: 'utf-8' }));
    }

    async saveIPs(ip) {
        this.ipsThatVoted.ips.push(ip);
        await writeFile(join(__dirname, '../', 'model', 'iplist.json'), JSON.stringify(this.ipsThatVoted), { encoding: 'utf-8' });
    }

    async check(ip) {
        return !this.ipsThatVoted.ips.includes(ip);
    }
}

module.exports = {
    IpRestrict,
};