const assert = require('assert');

let universeOfSoutheros;
const sender = 'SPACE';
const contents = ['LAND FDIXXSOKKOFBBMU', 'ICE MOMAMVTMTMHTM', 'WATER SUMMER IS COMING', 'AIR OWLAOWLBOWLC', 'FIRE AJXGAMUTA'];

beforeEach(() => {
    universeOfSoutheros = require('../universeOfSoutheros');
})

describe('Universe',() => {
    it('send message via postman', () => {
        const messageStatus = contents.map(str => universeOfSoutheros.postMan(sender, str.substr(0,str.indexOf(' ')).toUpperCase(),  str.substr(str.indexOf(' ')+1).toUpperCase())).every(x => x);
        assert.ok(messageStatus);
    });

    it('expect LAND ICE FIRE as supporters', () => {
        contents.forEach(str => universeOfSoutheros.postMan(sender, str.substr(0,str.indexOf(' ')).toUpperCase(),  str.substr(str.indexOf(' ')+1).toUpperCase()));
        const spaceSupporters = universeOfSoutheros.kingdoms.filter(x => x.willSupport === sender).map(x => x.name);
        const expected = ['LAND', 'ICE', 'FIRE'];
        const checker = () => {
            expected.forEach(x => { if(!spaceSupporters.includes(x)) return false; });
            return true;
        }
        assert.ok(expected.length === spaceSupporters.length && checker());
    });

});