function solve(input) {
    let index = 0;
    let command = input[index++];
    let primeSum = 0;
    let notPrimeSum = 0;
    while (command !== "stop") {
        let num = Number(command);
        if (num < 0) {
            console.log("Number is negative.");
            command = input[index++];
            continue;
        }
        let count = 0;
        for (let i = 1; i <= num; i++) {
            
            if (num % i === 0) {
               count++;
            }             
        }
        if (count <= 2) {
                primeSum += num;
            } else {
                notPrimeSum += num;
            }
        command = input[index++];
    }
    console.log(`Sum of all prime numbers is: ${primeSum}`);
    console.log(`Sum of all non prime numbers is: ${notPrimeSum}`)
}
solve(["0",
"-9",
"0",
"stop"]);