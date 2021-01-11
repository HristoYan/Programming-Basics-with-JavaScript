function solve (input) {
    let name = input[0];
    let sum = 0;
    let index = 1;
    let grade = Number(input[index++]);
    let fail = 0;
    let clas = 1;
    while (clas <= 12) {
        grade = Number(grade);
        if (grade < 4) {
            fail++;
        }
        if (fail >= 2) {
            break;
        }
        sum += grade;
        clas++;
        grade = input[index++];
    }
    if (clas < 12) {
        console.log(`${name} has been excluded at ${clas - 1} grade`)
    } else {
        console.log(`${name} graduated. Average grade: ${(sum/12).toFixed(2)}`);
    }

}
solve(["Mimi", 
"5",
"6",
"5",
"6",
"5",
"6",
"6",
"2",
"3"]);