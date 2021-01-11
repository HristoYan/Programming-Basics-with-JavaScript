function solve (input) {
    let count = Number(input.shift());
    let lessThan200 = 0;
    let lessThan399 = 0;
    let lessThan599 = 0;
    let lessThan799 = 0;
    let moreThan800 = 0;

    for (let i = 0; i <= count; i++) {
        let num = Number(input.shift());
        if (num < 200) {
            lessThan200++;
        } else if (num >= 200 && num < 400) {
            lessThan399++;
        } else if (num >= 400 && num < 600) {
            lessThan599++;
        } else if (num >= 600 && num < 800) {
            lessThan799++;
        } else if (num >= 800) {
            moreThan800++;
        }
    }
    let pro200 = (lessThan200 / count * 100).toFixed(2);
    let pro399 = (lessThan399 / count * 100).toFixed(2);
    let pro599 = (lessThan599 / count * 100).toFixed(2);
    let pro799 = (lessThan799 / count * 100).toFixed(2);
    let pro800 = (moreThan800 / count * 100).toFixed(2);

    console.log(`${pro200}%`);
    console.log(`${pro399}%`);
    console.log(`${pro599}%`);
    console.log(`${pro799}%`);
    console.log(`${pro800}%`);
}
solve(["3",
"1",
"2",
"999"]);
