function result(days, cooksNum, cakeNum, waffleNum, panCakeNum) {
    let cakePrice = Number(cakeNum) * 45;
    
    let wafflePrice = Number(waffleNum) * 5.8;
    
    let panCakePrice = Number(panCakeNum) * 3.2;
    
    let moneyPerDay = (cakePrice + wafflePrice + panCakePrice) * Number(cooksNum);

    let total = moneyPerDay * Number(days);
    let profit = total - total / 8;
    console.log(profit);
}
result("23", "8", "14", "30", "16");
result("131", "5", "9", "33", "46");