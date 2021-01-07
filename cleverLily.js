function solve(age, woshingMPrice, toyPrice) {
    age = Number(age);
    woshingMPrice = Number(woshingMPrice);
    toyPrice = Number(toyPrice);
    let money = 0;
    let toysCount = 0;
    let brother = 0;
    for (let i = 1; i <= age; i++) {
        if (i % 2 === 0) {
            brother++;
            money += brother * 10;

        } else {
            toysCount++;
        }
    }
    money = money - brother;
    let toyMoney = toysCount * toyPrice;
    let totalMoney = toyMoney + money;

    if (totalMoney >= woshingMPrice) {
        console.log(`Yes! ${(totalMoney - woshingMPrice).toFixed(2)}`);
    } else {
        console.log(`No! ${(woshingMPrice - totalMoney).toFixed(2)}`);
    }

}
solve("10", "170", "6");