function solve(year, holidaysNum, weeksNumHome) {

    holidaysNum = Number(holidaysNum);
    weeksNumHome = Number(weeksNumHome);
    let sofiaGames = (48 - weeksNumHome) * 3/4;
    let holidaysGames = holidaysNum * 2/3;
    totalGames = weeksNumHome + sofiaGames + holidaysGames;
    if (year === "leap") {
        totalGames = totalGames * 1.15;
    } 
    console.log(Math.floor(totalGames));
}
solve("normal", "6", "13");