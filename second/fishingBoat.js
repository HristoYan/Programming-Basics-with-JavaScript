function solve(budget, season, num) {

    budget = Number(budget);
    num = Number(num);
    let rent = 0;
    switch (season) {
        case "Summer":
        case "Autumn":
            rent = 4200;
            if (num <= 6) {
                rent = rent * 0.9;
            } else if (num <= 11) {
                rent = rent * 0.85;
            } else {
                rent = rent * 0.75;
            }
            break;
        case "Spring":
            rent = 3000;
            if (num <= 6) {
                rent = rent * 0.9;
            } else if (num <= 11) {
                rent = rent * 0.85
            } else {
                rent = rent * 0.75;
            }
            break;
        case "Winter":
            rent = 2600;
            if (num <= 6) {
                rent = rent * 0.9;
            } else if (num <= 11) {
                rent = rent * 0.85
            } else {
                rent = rent * 0.75;
            }
            break;
    }
    if (num % 2 === 0 && season != "Autumn") {
        rent = rent * 0.95;
    }
    if (budget >= rent) {
        console.log(`Yes! You have ${(budget - rent).toFixed(2)} leva left.`);
    } else {
        console.log(`Not enough money! You need ${(rent - budget).toFixed(2)} leva.`);
    }

}
solve(2000,
    "Winter",
    13)
    ;