function solve(eggSize, color, num) {
    num = Number(num);
    let price = 0;
    let totalPrice = 0;
    switch (eggSize) {
        case "Large":
            if (color === "Red") {
                price = 16;
            } else if (color === "Green") {
                price = 12;
            } else if (color === "Yellow") {
                price = 9;
            }
            break;
        case "Medium":
            if (color === "Red") {
                price = 13;
            } else if (color === "Green") {
                price = 9;
            } else if (color === "Yellow") {
                price = 7;
            }
            break;
        case "Small":
            if (color === "Red") {
                price = 9;
            } else if (color === "Green") {
                price = 8;
            } else if (color === "Yellow") {
                price = 5;
            }
            break;
    }
    totalPrice = price * num;
    totalPrice *= 0.65;
    console.log(`${totalPrice.toFixed(2)} leva.`);
}
solve("Small",
"Yellow",
"3");