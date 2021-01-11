function solve(diff, loopyness, pages) {
    diff = Number(diff);
    loopyness = Number(loopyness);
    pages = Number(pages);
    let cattegory = "";
    
    if ( diff >= 80 && loopyness >= 80 && pages >= 8) {
        cattegory = "Legacy";
    } else if (diff >= 80 && loopyness <= 10) {
        cattegory = "Master";
    } else if (diff <= 10) {
        cattegory = "Elementary";
    } else if (diff <= 30 && pages <= 1) {
        cattegory = "Easy";
    
    } else if (loopyness >= 50 && pages >= 2) {
        cattegory = "Hard";
    } else {
        cattegory = "Regular";
    }
console.log(`${cattegory}`);
}
solve("1", "1", "1");