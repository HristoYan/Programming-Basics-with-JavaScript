function solve(input) {
    let index = 0;
    let studentName = input[index++];
    let grade = 0;
    while (studentName !== "Midnight") {
        let cheating = false;
        let skore = 0;
        let addSkore = 0;
        for (let i = 0; i < 6; i++) {
            let points = Number(input[index++]);
            if (points < 0) {
                console.log(`${studentName} was cheating!`);
                cheating = true;
                break;
            }
            addSkore += points;
        }
        skore = Math.floor(addSkore / 600 * 100);
        grade = skore * 0.06;
        if (cheating) {

        } else {
            if (grade >= 5) {
                console.log("===================");
                console.log("|   CERTIFICATE   |");
                console.log(`|    ${grade.toFixed(2)}/6.00    |`);
                console.log("===================");
                console.log(`Issued to ${studentName}`);
            } else if (grade < 3) {
                console.log(`${studentName} - 2.00`);
            } else {
                console.log(`${studentName} - ${grade.toFixed(2)}`);
            }
        }
        studentName = input[index++];
    }
}
solve(["George",
    "100",
    "100",
    "100",
    "100",
    "40",
    "0",
    "John",
    "10",
    "-1",
    "Peter",
    "100",
    "100",
    "100",
    "100",
    "100",
    "70",
    "Midnight"])