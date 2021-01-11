function solve (input) {
    let failse = input[0];
    let lessThan4 = 0;
    let count = 0;
    let sum = 0;
    let problemName = "";
    let index = 1;
    let task = input[index++];
    while (task !== "Enough") {
        problemName = task;
        task = Number(input[index++]);
        if (task <= 4) {
            lessThan4++;
            sum += task;
            count++;
            task = input[index++]
            continue;

        }
        sum += task;
        if (lessThan4 >= failse) {

            break;
        }
        count++;
        task = input[index++];
    }
    if (lessThan4 >= failse) {
        console.log(`You need a break, ${lessThan4} poor grades.`);
    } else {
        console.log(`Average score: ${(sum / count).toFixed(2)}`);
        console.log(`Number of problems: ${count}`);
        console.log(`Last problem: ${problemName}`);
    }

}
solve(["3",
"Money",
"6",
"Story",
"4",
"Spring Time",
"5",
"Bus",
"6",
"Enough"])
