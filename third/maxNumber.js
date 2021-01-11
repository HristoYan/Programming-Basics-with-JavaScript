function solve (input) {
    let index = 0;
    let num = input[index++];
    let maxNum = -1000000;
    while (num !== "Stop") {
        num = Number(num);
        if (num > maxNum) {
            maxNum = num;
        } 
        
        num = input[index++];
    }
    console.log(maxNum);
}
solve(["-1",
"-2",
"Stop"]);