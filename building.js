function solve(input) {
let floors = Number(input[0]);
let rooms = Number(input[1]);

for(let i = floors; i > 0 ; i--) {
    let type = '';
    let output = '';
     if(i === floors) {
            type = "L";
        } else if (i % 2 != 0) {
            type = "A";
        } else {
            type = "O";
        }
    for(let j = 0; j < rooms; j++) {
       output += `${type}${i}${j} `;
    }
    console.log(output);
}

}
solve(["4", "4"]);