function solve(guestsCount, pricePerPerson, buguet) {
    guestsCount = Number(guestsCount);
    pricePerPerson = Number(pricePerPerson);
    buguet = Number(buguet);
    let partyPrice = guestsCount * pricePerPerson;
    let cakePrice = buguet * 0.1;
    if (guestsCount >= 10 && guestsCount <= 15) {
        partyPrice *= 0.85;
    } else if (guestsCount > 15 && guestsCount <= 20) {
        partyPrice *= 0.80;
    } else if (guestsCount > 20) {
        partyPrice *= 0.85;
    }
    let totalMoney = cakePrice + partyPrice;
     
    if (totalMoney <= buguet) {
        console.log(`It is party time! ${(buguet - totalMoney).toFixed(2)} leva left.`);
    } else {
        console.log(`No party! ${(totalMoney - buguet).toFixed(2)} leva needed.`);
    }

}
solve("8",
    "25",
    "340");