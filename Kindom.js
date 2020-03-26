const helper =  require('./constants');

class Kingdom {
    constructor(name, animal) {
        this.name = name;
        this.animal = animal;
        this.willSupport = false;
    }

    receiveMessage(message) {
        if (helper.decryptMessage(this.animal, message) && !this.willSupport) this.willSupport = true;
        return true;
    }
}

module.exports = Kingdom;