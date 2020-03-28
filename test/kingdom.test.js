const assert = require('assert');

const Kingdom = require('../Kindom');

let testKingdom;
const sender = 'SPACE';

const kingdomName = 'LAND';
const kingdomAnimal = 'PANDA'

beforeEach(() => {
    testKingdom = new Kingdom(kingdomName, kingdomAnimal);
});

describe('Kigdom',() => {
    it('initializes correctly - name', () => {
        assert.strictEqual(testKingdom.name, kingdomName);
    });

    it('initializes correctly - animal', () => {
        assert.strictEqual(testKingdom.animal, kingdomAnimal);
    })

    it('send message and expect support', () => {
        testKingdom.receiveMessage(sender, 'FDIXXSOKKOFBBMU');
        assert.strictEqual(testKingdom.willSupport, sender);
    });

    it('send invalid message - no support', () => {
        testKingdom.receiveMessage(sender, 'FDIXXSOKKOFBBM'); // missing U
        assert.equal(testKingdom.willSupport,'');
    });

});