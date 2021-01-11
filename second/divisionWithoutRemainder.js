function solve(input) {
    let index = 0;
    let divBy2 = 0;
    let divBy3 = 0;
    let divBy4 = 0;
    let num = Number(input[index++]);
    let testNum = Number(input[index++]);

    for (let i = 1; i <= num; i++) {
        if (testNum % 2 === 0) {
            divBy2++;
        } 
        if (testNum % 3 === 0) {
            divBy3++;
        }
        if (testNum % 4 === 0) {
            divBy4++;
        }
        testNum = Number(input[index++]);
    }
    console.log(`${(divBy2 / num * 100).toFixed(2)}%`);
    console.log(`${(divBy3 / num * 100).toFixed(2)}%`);
    console.log(`${(divBy4 / num * 100).toFixed(2)}%`);
}
solve(["10",
    "680",
    "2",
    "600",
    "200",
    "800",
    "799",
    "199",
    "46",
    "128",
    "65"]);