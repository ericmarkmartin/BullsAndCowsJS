import {createWriteStream} from 'fs';

var Combinatorics = require('js-combinatorics');

const digits = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

let codesFile = createWriteStream(process.argv[2] || 'codes.js');

codesFile.write('const codes = [\n');

Combinatorics.permutation(digits, 4).forEach(p => {
    codesFile.write('\t[\''.concat(p.join('\',\''), '\'],\n'));
});

codesFile.write('];\nexport default codes;');
