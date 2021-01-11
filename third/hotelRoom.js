function solve(month, nights) {
    nights = Number(nights);
    let priceAp = 0;
    let priceSt = 0;
    if (month === "May" || month === "October") {
        priceAp = 65;
        priceSt = 50;
        if (nights > 14) {
            priceSt = priceSt * 0.7;
            priceAp = priceAp * 0.9;
        } else if (nights <= 14 && nights > 7) {
            priceSt = priceSt * 0.95;
            priceAp = priceAp;
        } else {
            priceSt = priceSt;
            priceAp = priceAp;
        }
    } else if (month === "June" || month === "September") {
        priceSt = 75.2;
        priceAp = 68.7;
        if (nights > 14) {
            priceSt = priceSt * 0.8;
            priceAp = priceAp * 0.9;
        } else {
            priceSt = priceSt;
            priceAp = priceAp;
        }
    } else {
        priceSt = 76;
        priceAp = 77;
        if (nights > 14) {
            priceSt = priceSt;
            priceAp = priceAp * 0.9;
        } else {
            priceSt = priceSt;
            priceAp = priceAp;
        }
    }
    console.log(`Apartment: ${(priceAp * nights).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceSt * nights).toFixed(2)} lv.`);
}
solve("August",
"20")
;