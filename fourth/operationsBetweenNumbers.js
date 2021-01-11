function solve(N1, N2, operation) {

    N1 = Number(N1);
    N2 = Number(N2);
    let result = 0;
    let kind = "";
    switch (operation) {
        case "+":
            result = N1 + N2;
            break;
        case "-":
            result = N1 - N2;
            break;
        case "*":
            result = N1 * N2;
            break;
        case "/":
            result = N1 / N2;
            break;
        case "%":
            result = N1 % N2;
            break;
    }
    if (operation === "+" || operation === "-" || operation === "*") {
        if (result % 2 === 0) {
            kind = "even";
            console.log(`${N1} ${operation} ${N2} = ${result} - ${kind}`);
        } else {
            kind = "odd";
            console.log(`${N1} ${operation} ${N2} = ${result} - ${kind}`);
        }
    } else if (operation === "/") {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            console.log(`${N1} ${operation} ${N2} = ${result.toFixed(2)}`);
        }
    } else {
        if (N2 === 0) {
            console.log(`Cannot divide ${N1} by zero`);
        } else {
            console.log(`${N1} ${operation} ${N2} = ${result}`);
        }
    }

}
solve("7",
"3",
"*")
    ;