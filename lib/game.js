import Host from './host/host';
import Guesser from './guesser/guesser';

let h = new Host();
let g = new Guesser();

console.log("Code: " + h.codeString());

(function game (guesses) {
    console.log("===================");
    console.log("Guess No. " + guesses + ": " + g.guessString());
    let r = h.rate(g.guessString());
    console.log("Rating: " + r);
    if (r === "4B0C") {
        console.log("===================");
        console.log("Took " + guesses + " guesses");
        return guesses;
    } else {
        g.filterCodes(r);
        return game(guesses + 1);
    }
})(1);
