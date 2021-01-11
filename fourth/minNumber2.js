function solve (input) {
    let index = 0;
    let num = input[index++];
    let minNum = 1000000;
    while (num !== "Stop") {
        num = Number(num);
        if (num < minNum) {
            minNum = num;
        } 
        
        num = input[index++];
    }
    console.log(minNum);
}
solve(["100",
"99",
"80",
"70",
"Stop"]);