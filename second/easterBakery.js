function solve(flouerPrice, flouerKg, shugerKg, eggPacks, yeast) {
    flouerPrice = Number(flouerPrice);
    flouerKg = Number(flouerKg);
    shugerKg = Number(shugerKg);
    eggPacks = Number(eggPacks);
    yeast = Number(yeast);
    let flouerPriceTotal = flouerPrice * flouerKg;
    let shugerKgprice = flouerPrice * 0.75
    let shugerPrice = shugerKgprice * shugerKg;

    let eggPrice = (flouerPrice * 1.1) * eggPacks;
    let yeastPrice = (shugerKgprice * 0.2) * yeast;
    let total = flouerPriceTotal + shugerPrice + eggPrice + yeastPrice;

    console.log(total.toFixed(2));
}
solve("63.44",
  "3.57",
  "6.35",
  "8",
  "2");