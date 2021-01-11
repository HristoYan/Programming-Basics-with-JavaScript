function solve(input) {
    let sum = 0;
    let index = 0;
    let theNum = Number(input[index++]);

    while (sum < theNum) {
        let num = Number(input[index++]);
        sum += num;
        
    }
    console.log(sum);
}
solve(["20",
"1",
"2",
"3",
"4",
"5",
"6"])
;