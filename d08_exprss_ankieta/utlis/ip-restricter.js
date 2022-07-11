class IpRestrict{
    constructor() {
        this.ipsThatVoted = new Set();
    }

    check(ip) {
        if (this.ipsThatVoted.has(ip)) {
            return false;
        }

        this.ipsThatVoted.add(ip);
        return true;
    }
}

module.exports = {
    IpRestrict
};