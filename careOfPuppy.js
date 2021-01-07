function solve(input) {
let food = Number(input[0]);
food *= 1000;
let index = 1;
let portion = input[index++];
let sum = 0;
while(portion !== "Adopted") {
    portion = Number(portion);
    sum += portion;
    portion = input[index++];

}
 if (food >= sum) {
     console.log(`Food is enough! Leftovers: ${food - sum} grams.`);
 } else {
     console.log(`Food is not enough. You need ${sum - food} grams more.`);
 }


}
solve(["2",
    "999",
    "456",
    "999",
    "999",
    "123",
    "456",
    "Adopted"
    ]);