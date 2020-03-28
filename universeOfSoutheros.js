const Kingdom = require('./Kindom');

class UniverseOfSoutheros {
    constructor() {
        this.kingdoms = [
            new Kingdom('SPACE', 'GORILLA'), 
            new Kingdom('LAND', 'PANDA'),
            new Kingdom('WATER', 'OCTOPUS'),
            new Kingdom('ICE', 'MAMMOTH'),
            new Kingdom('AIR', 'OWL'),
            new Kingdom('FIRE', 'DRAGON')
        ];
    }

    getKingdomNames() {
        return this.kingdoms.map(x => x.name);
    }

    getKingdomIndex(name) {
        return this.kingdoms.findIndex(x => x.name === name);
    }

    postMan(from, to, message) {
        if (!this.getKingdomNames().includes(from)) return true;
        const index = this.getKingdomIndex(to);
        if (index > -1) this.kingdoms[index].receiveMessage(from, message);
        return true;
    }
}

// returning singleton instance of this class
module.exports = new UniverseOfSoutheros();