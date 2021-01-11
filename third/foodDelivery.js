function solve(chiken, fish, vegi) {
    chiken = Number(chiken);
    fish = Number(fish);
    vegi = Number(vegi);
    let chikenMoney = chiken * 10.35;
    let fishMoney = fish * 12.40;
    let vegiMoney = vegi * 8.15;

    let totalPrice = chikenMoney + fishMoney + vegiMoney;
    let desert = totalPrice * 0.2;
    totalPrice += desert + 2.5;

    console.log(`Total: ${totalPrice.toFixed(2)}`);

}
solve("1",
    "1",
    "1 ");