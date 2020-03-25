class UniverseOfSoutheros {
    constructor(kingdoms) {
        //// kingdoms will object 
        /// with key as Kingdom name 
        // and value of animal to it
        this.kingdoms = kingdoms;
        this.supporters = [];
        this.alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
    }

    receiveMessage(kingdom, message) {
        if (!this.kingdoms[kingdom]) return true;
        const key = this.kingdoms[kingdom].length;
        const decrypted = this.decryptMessage(message, key);
        if (this.isSupporter(kingdom, decrypted) && !this.supporters.includes(kingdom)) this.supporters.push(kingdom);
        return true;
    }

    decryptMessage(message, key) {
        let newMessage = "";
        for (let i = 0; i < message.length; i++) {
            const index = this.alphabets.indexOf(message[i]);
            if (index > -1) {
                newMessage += this.alphabets[this.getCircularIndex(index, key)];
            } else {
                newMessage += message[i];
            }
        }
        return newMessage;
    }

    getCircularIndex(index, increment) {
        return index - increment < 0 ? (26 - (increment - index)) : index - increment;
    }

    isSupporter(kingdom, message) {
        const animal = this.kingdoms[kingdom];
        message = message.split("");
        for(let i = 0; i < animal.length; i++) {
            const index = message.indexOf(animal[i]);
            if (index > -1) {
                message.splice(index, 1);
            } else {
                return false;
            }
        }
        return true;
    }

    finalSupporters() {
        if(this.supporters.length < 3) return 'NONE';
        else return 'SPACE ' + this.supporters.join(' ');
    }
}


// returning singleton instance of this class
module.exports = new UniverseOfSoutheros({ LAND: 'PANDA', WATER: 'OCTOPUS', ICE: 'MAMMOTH', AIR: 'OWL', FIRE: 'DRAGON' });