const helper =  require('./constants');

class Kingdom {
    constructor(name, animal) {
        this.name = name;
        this.animal = animal;
        this.willSupport = '';
    }

    receiveMessage(from, message) {
        if (helper.decryptMessage(this.animal, message) && !this.willSupport) this.willSupport = from;
        return true;
    }
}

module.exports = Kingdom;