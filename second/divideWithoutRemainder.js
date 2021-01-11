function solve(input) {
    let count = Number(input.shift());
    let divisableBy2 = 0;
    let divisableBy3 = 0;
    let divisableBy4 = 0;

    for (let i = 0; i <= count; i++) {
        let num = Number(input.shift());
        if (num % 2 === 0) {
            divisableBy2++;
        }
        if (num % 3 === 0){
            divisableBy3++;
        }
        if (num % 4 === 0){
            divisableBy4++;
        }
    }
    let procent2 = divisableBy2 / count * 100;
    let procent3 = divisableBy3 / count * 100;
    let procent4 = divisableBy4 / count * 100;

    console.log(`${procent2.toFixed(2)}%`);
    console.log(`${procent3.toFixed(2)}%`);
    console.log(`${procent4.toFixed(2)}%`);

}
solve(["3",
"3",
"6",
"9"])
;