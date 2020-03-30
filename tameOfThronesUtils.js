class TameOfThronesUtils {
    alphabets = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    decryptMessage(animal, message) {
        let newMessage = "";
        for (let i = 0; i < message.length; i++) {
            const index = this.alphabets.indexOf(message[i]);
            if (index > -1) {
                newMessage += this.alphabets[this.getCircularIndex(index, animal.length)];
            } else {
                newMessage += message[i];
            }
        }
        return this.isSupporter(animal, newMessage);
    }

    getCircularIndex(index, increment) {
        return index - increment < 0 ? (26 - (increment - index)) : index - increment;
    }

    isSupporter(animal, message) {
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

    getAlliancesByName(universe, name) {
        const supporters = universe.kingdoms.filter(x => x.willSupport === name).map(x => x.name);
        if(supporters.length < 3) return 'NONE';
        else return `${name} ` + supporters.join(' ');
    }
}

module.exports = new TameOfThronesUtils();