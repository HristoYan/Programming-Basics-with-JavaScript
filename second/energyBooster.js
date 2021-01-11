function solve(fruit, size, count) {
    count = Number(count);
    let money = 0;
    switch (fruit) {
        case "Watermelon":
            if (size === "small") {
                money = count * 56 * 2;
            } else {
                money = count * 28.70 * 5;
            }
        break;
        case "Mango":
            if (size === "small") {
                money = count * 36.66 * 2;
            } else {
                money = count * 19.60 * 5;
            }
        break;
        case "Pineapple":
            if (size === "small") {
                money = count * 42.10 * 2;
            } else {
                money = count * 24.80 * 5;
            }
        break;
        case "Raspberry":
            if (size === "small") {
                money = count * 20 * 2;
            } else {
                money = count * 15.20 * 5;
            }
        break;
    }

    if (money >= 400 && money <= 1000) {
        money *= 0.85;
    } else if (money > 1000){
        money *= 0.50;
    }
    console.log(`${money.toFixed(2)} lv.`);
}
solve("Mango",
    "big",
    "8");