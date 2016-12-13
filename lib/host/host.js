import {sampleSize} from 'lodash';

import Rating from './rating';

export default class Host {
    constructor () {
        this.code = Host.randomCode();
    }

    static randomCode () {
        return sampleSize(Host.digits, 4);
    }

    static parseGuessString (guess) {
        return guess.split('');
    }

    codeString () {
        return this.code.join('');
    }

    rate (guess) {
        let rating = new Rating();
        Host.parseGuessString(guess).forEach((digit, i) => {
            if (this.code[i] === digit) { rating.addBull(); } // Bull
            else if (this.code.includes(digit)) { rating.addCow(); } // Cow
        });
        return rating.toString();
    }
}

Object.defineProperty(Host, 'digits', {
    value: [
        '0', '1', '2', '3', '4',
        '5', '6', '7', '8', '9'
    ]
});

let h = new Host();
console.log(h.codeString());
console.log(h.rate("1234"));
