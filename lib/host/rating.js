export default class Rating {
    constructor (bulls, cows) {
        this.bulls = bulls || 0;
        this.cows = cows || 0;
    }

    toString () {
        return this.bulls
                   .toString()
                   .concat('B', this.cows, 'C');
    }

    addBull () { this.bulls++; }
    addCow () { this.cows++; }
}
