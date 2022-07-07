const { join } = require("path");
const { readFile, writeFile } = require("fs/promises");
const { IpRestrict } = require('../utils/ip-restrict');

const ipRestrict = new IpRestrict();

const voteOnYes = async (req, res) => {
    await ipRestrict.getIPs();
    if (!(await ipRestrict.check(req.ip))) {
        res.status(403).json({ message: "Głos oddano już wcześniej!" });
        return;
    }
    await ipRestrict.saveIPs(req.ip);
    const data = await readFile(join(__dirname,'../', 'model', 'data.json'), {encoding: 'utf-8'});
    const newData = JSON.parse(data);
    newData.yes++;
    await writeFile(join(__dirname,'../', 'model', 'data.json'), JSON.stringify(newData), {encoding: 'utf-8'});
    res.json({message: "Dziękujemy za głos!"});
};

const voteOnNo = async (req, res) => {
    await ipRestrict.getIPs();
    if (!(await ipRestrict.check(req.ip))) {
        res.status(403).json({message: "Głos oddano już wcześniej!"});
        return;
    }
    await ipRestrict.saveIPs(req.ip);
    const data = await readFile(join(__dirname,'../', 'model', 'data.json'), {encoding: 'utf-8'});
    const newData = JSON.parse(data);
    newData.no++;
    await writeFile(join(__dirname,'../', 'model', 'data.json'), JSON.stringify(newData), {encoding: 'utf-8'});
    res.json({message: "Dziękujemy za głos!"});
};
    
const voteCehck = async (req, res) => {
    const data = await readFile(join(__dirname,'../', 'model', 'data.json'), {encoding: 'utf-8'});
    res.json(data);
};

module.exports = {
    voteOnYes,
    voteOnNo,
    voteCehck
};