function solve (num1, num2) {

    num1 = Number(num1);
    num2 = Number(num2);
    let sum = 0;
    let output = "";
    for (let i = num1; i <= num2; i ++) {
      
        if (i % 9 === 0) {
            sum = sum + i;
            output = output + i + "\n";
        }
    }
    console.log(`The sum: ${sum}`);
    console.log(output);
}
solve("100", "200");