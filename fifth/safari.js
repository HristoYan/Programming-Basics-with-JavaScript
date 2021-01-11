function solve(budget, fuel, dayOfWeek) {
    budget = Number(budget);
    fuel = Number(fuel);
    let fuelMoney = fuel * 2.10;
    let guide = 100;
    let totleMoney = fuelMoney + guide;

    if (dayOfWeek === "Saturday") {
        totleMoney *= 0.9;
    } else {
        totleMoney *= 0.8;
    }
    
    if (totleMoney < budget) {
        console.log(`Safari time! Money left: ${(budget - totleMoney).toFixed(2)} lv.`);
    } else {
        console.log(`Not enough money! Money needed: ${(totleMoney - budget).toFixed(2)} lv.`);
    }
}
solve("120", "30", "Saturday");

