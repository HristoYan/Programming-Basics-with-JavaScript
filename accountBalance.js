function solve(input) {
    let index = 0;
    let sum = 0;
    let value = input[index++];
    while (value !== "NoMoreMoney") {
        value = Number(value);
        if (value < 0) {
            console.log("Invalid operation!");
            break;
        }
        console.log(`Increase: ${value.toFixed(2)}`);
        sum += value;
        value = input[index++];
    }
    console.log(`Total: ${sum.toFixed(2)}`);

}
solve(["120",
"45.55",
"-150"]);