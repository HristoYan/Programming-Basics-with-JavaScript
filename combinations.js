function solve(input) {
let theNum = Number(input[0]);
let counter = 0;

for(let i = 0; i <= theNum; i++) {
    for(let j = 0; j <= theNum; j++) {
        for(let k = 0; k <= theNum; k++) {
            if(i + j + k === theNum) {
                counter++;
            }
        }
    }
}
console.log(counter);
}
solve(["5"]);