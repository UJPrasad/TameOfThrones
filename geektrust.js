const fs = require('fs');

const universeOfSoutheros = require('./universeOfSoutheros');
const errors = require('./errors');

try {
    const args = process.argv.slice(2);
    if (args.length !== 1) throw new Error(errors.USAGE_ERROR);
    const file = fs.readFileSync(args[0], 'utf8');
    const contents = file.split('\n').map(x => x.trim()).filter(p => p);
    contents.forEach(str => universeOfSoutheros.receiveMessage(str.substr(0,str.indexOf(' ')).toUpperCase(),  str.substr(str.indexOf(' ')+1).toUpperCase()));
    console.log(universeOfSoutheros.finalSupporters());
} catch (e) {
    console.log(e);
}