import {expect} from 'chai';
import {uniq} from 'lodash';

import Host from '../lib/host';

describe('The Host class', () => {
    describe('it\'s code generation', () => {
        var code = Host.randomCode();
        it('creates an array of four digits', () => {
            let digitRE = /^\d$/;
            let allDigits = code.every(e => digitRE.test(e));

            expect(code).to.be.instanceof(Array);
            expect(code).to.have.lengthOf(4);
            expect(allDigits).to.be.true;
        });
        it('doesn\'t repeat digits', () => {
            expect(code).to.eql(uniq(code));
        });
    });
    it('can parse guess strings', () => {});
    it('has a `digits` property', () => {});
    describe('instances', () => {
        it('have codes upon construction', () => {});
        it('can represent their codes as strings', () => {});
        it('can rate guesses against their codes', () => {});
    });
});
