function solve(input) {
    let budget = Number(input[0]);
    let budgetLeft = budget;
    let index = 1;
    let inputLine = input[index++];
    let goodNum = 0;
    let totoalPrice = 0;
    while (budgetLeft > 0) {
        if (inputLine === "Stop") {
            break;
        }
        goodNum++;
        let price = Number(input[index++]);
        if (goodNum % 3 === 0) {
            price /= 2;
        }
        totoalPrice += price;
        budgetLeft -= price;
        inputLine = input[index++];
    }

    if (budgetLeft < 0) {
        console.log("You don't have enough money!");
        console.log(`You need ${(totoalPrice - budget).toFixed(2)} leva!"`);
    } else {
        console.log(`You bought ${goodNum} products for ${totoalPrice.toFixed(2)} leva.`);
    }
}
solve(["153.20",
"Backpack",
"25.20",
"Shoes",
"54",
"Sunglasses",
"30",
"Stop"]);