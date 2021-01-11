function solve(input) {
    let num = Number(input[0]);
    let index = 1;
    let topic = input[index++];
    let totalAvgGrade = 0;
    let sumAvgGrade = 0;
    let count = 0;
    while(topic !== "Finish") {
        
        
        count++;
        let avgGrade = 0;
        let sumGrade = 0;
        for(let i = 1; i <= num; i++) {
            
            let grade = Number(input[index++]);
            sumGrade += grade;
        }
        avgGrade = sumGrade / num;
        sumAvgGrade += avgGrade;
        console.log(`${topic} - ${avgGrade.toFixed(2)}.`);
        topic = input[index++];
    }
    totalAvgGrade = sumAvgGrade / count;
    console.log(`Student's final assessment is ${totalAvgGrade.toFixed(2)}.`);
}
solve(["2",
"Objects and Classes",
"5.77",
"4.23",
"Dictionaries",
"4.62",
"5.02",
"RegEx",
"2.88",
"3.42",
"Finish"]);