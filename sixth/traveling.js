function solve(input) {
let destination = input[0];

let index = 1;

while(destination !== "End") {
    let vacMoney = Number(input[index++]);
    let save = Number(input[index++]);
    let savings = 0;
    
    while(savings < vacMoney) {
        savings += save;
        if(savings >= vacMoney) {
            break;
        }
        save = Number(input[index++]);
    }
    console.log(`Going to ${destination}!`);
    destination = input[index++];
}
}
solve(["France",
"2000",
"300",
"300",
"200",
"400",
"190",
"258",
"360",
"Portugal",
"1450",
"400",
"400",
"200",
"300",
"300",
"Egypt",
"1900",
"1000",
"280",
"300",
"500",
"End"])

;
