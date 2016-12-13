import {isEqual, sample} from 'lodash';

import Rating from '../rating';
import codes from './codes';

export default class Guesser {
    constructor () {
        this.codes = codes;
        this.guess = this.newGuess();
    }

    newGuess () {
        return sample(this.codes);
    }

    guessString () {
        return this.guess.join('');
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
        this.codes = this.codes.filter(code => {
            return isEqual(this.rate(code), rating)
        });
        this.guess = this.newGuess();
    }

}
