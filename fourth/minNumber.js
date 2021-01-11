function solve(input) {
    let count = Number(input.shift());
    let theNum = 10000;
    for (let i = 0; i < count; i++) {
        let num1 = Number(input.shift());
        if (count === 1) {
            theNum = num1;
        }
        if (num1 > theNum) {
            theNum = theNum;
        } else {
            theNum = num1;
        }
    }
    console.log(theNum);
}
solve(["2",
"-1",
"-2"])
;