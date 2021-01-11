function result(bujet, people, clothingPrice) {
    bujet = Number(bujet);
    people = Number(people);
    clothingPrice = Number(clothingPrice);
    let fonn = bujet * 0.1;
    let neededMoney = 0;
    let moneyForClothing = 0;

    if (people > 150) {
        moneyForClothing = (people * clothingPrice) * 0.9;
    } else {
        moneyForClothing = people * clothingPrice;
    }
    neededMoney = moneyForClothing + fonn;

    if (neededMoney > bujet) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(neededMoney - bujet).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(bujet - neededMoney).toFixed(2)} leva left.`);
    }

}

result("15437.62",
"186",
"57.99")
;