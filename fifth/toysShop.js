function result(vacationPrice, puzzels, dolls, bears, minnions, trucks) {
    vacationPrice = Number(vacationPrice);
    puzzels = Number(puzzels);
    dolls = Number(dolls);
    bears = Number(bears);
    minnions = Number(minnions);
    trucks = Number(trucks);

    puzzelsPrice = puzzels * 2.6;
    dollsPrice = dolls * 3;
    bearsPrice = bears * 4.1;
    minnionsPrice = minnions * 8.2;
    trucksPrice = trucks * 2;
    let totalWin = puzzelsPrice + dollsPrice + bearsPrice + minnionsPrice + trucksPrice;
    let total = puzzels + dolls + bears + minnions + trucks;

    if (total >= 50) {
        let dicount = totalWin * 0.25;
        totalWin = totalWin - dicount;
    } else {
        totalWin = totalWin;
    }
    let rent = totalWin * 0.1;
    totalWin = totalWin - rent;

    if (vacationPrice <= totalWin) {
        let left = totalWin - vacationPrice;
        console.log(`Yes! ${left.toFixed(2)} lv left.`);
    } else {
        let need = (vacationPrice - totalWin).toFixed(2);
        console.log(`Not enough money! ${need} lv needed.`)
    }
}

result("40.8", "20", "25", "30", "50", "10");
result("320", "8", "2", "5", "5", "1");