function solve(guestCount, buguet) {
    guestCount = Number(guestCount);
    buguet = Number(buguet);
    let cakeNum = Math.ceil(guestCount / 3);
    let eggNum = guestCount * 2;
    let cakePrice = cakeNum * 4;
    let eggPrice = eggNum * 0.45;
    let total = cakePrice + eggPrice;

    if (buguet >= total) {
        console.log(`Lyubo bought ${cakeNum} Easter bread and ${eggNum} eggs.`);
        console.log(`He has ${(buguet - total).toFixed(2)} lv. left.`)
    } else {
        console.log("Lyubo doesn't have enough money.");
        console.log(`He needs ${(total - buguet).toFixed(2)} lv. more.`);
    }
}
solve("9",
"12");