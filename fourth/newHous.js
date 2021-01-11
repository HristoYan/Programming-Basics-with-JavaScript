function solve(flowers, num, budjet) {

    num = Number(num);
    budjet = Number(budjet);
    let price = 0;
    switch (flowers) {
        case "Roses":
            if (num > 80) {
                price = (num * 5) * 0.9;
            } else {
                price = num * 5;
            }
            break;
        case "Dahlias":
            if (num > 90) {
                price = (num * 3.80) * 0.85;
            } else {
                price = num * 3.80;
            }
            break;
        case "Tulips":
            if (num > 80) {
                price = (num * 2.80) * 0.85;
            } else {
                price = num * 2.80;
            }
            break;
        case "Narcissus":
            if (num < 120) {
                price = (num * 3) * 1.15;
            } else {
                price = num * 3;
            }
            break;
        case "Gladiolus":
            if (num < 80) {
                price = (num * 2.50) * 1.2;
            } else {
                price = num * 2.50;
            }
            break;
    }
    if (budjet >= price) {
        console.log(`Hey, you have a great garden with ${num} ${flowers} and ${(budjet - price).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money, you need ${(price - budjet).toFixed(2)} leva more.`);
    }
}
solve("Tulips",
    "88",
    "260")
    ;