import {isEqual, sample} from 'lodash';

import rating from '../rating';
import codes from './codes';

export default class Guesser {
    constructor () {
        this.guess = newGuess();
    }

    newGuess () {
        return sample(codes);
    }

    rate (code) {
        let rating = new Rating();
        this.guess.forEach((digit, i) => {
            if (code[i] === digit) { rating.addBull(); } // Bull
            else if (code.includes(digit)) { rating.addCow(); } // Cow
        });
        return rating;
    }

    filterCodes (ratingString) {
        let rating = Rating.fromString(ratingString);
        this.codes = this.codes.filter(code => isEqual(rate(code), rating));
    }

}

Object.defineProperty(Guesser, 'codes', {value: codes});

