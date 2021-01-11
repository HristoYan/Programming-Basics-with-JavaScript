function solve(cakeNum, eggNum, sweetsNum) {
    cakeNum = Number(cakeNum);
    eggNum = Number(eggNum);
    sweetsNum = Number(sweetsNum);

    cakePrice = cakeNum * 3.2;
    eggPrice = eggNum * 4.35;
    sweetsPrice = sweetsNum * 5.4;
    let eggPaint = eggNum * 12 * 0.15;
    let totalPrice = cakePrice + eggPrice + sweetsPrice + eggPaint;

    console.log(totalPrice.toFixed(2));

}
solve("4",
"4",
"3");