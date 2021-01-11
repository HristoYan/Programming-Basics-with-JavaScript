function solve(destination, dates, nightsNum) {
    nightsNum = Number(nightsNum);
    let vacationPrice = 0;
    switch (destination) {
        case "France":
            if (dates === "21-23") {
                vacationPrice = nightsNum * 30;
            } else if (dates === "24-27") {
                vacationPrice = nightsNum * 35;
            } else if (dates === "28-31") {
                vacationPrice = nightsNum * 40;
            }
            break;
        case "Italy":
            if (dates === "21-23") {
                vacationPrice = nightsNum * 28;
            } else if (dates === "24-27") {
                vacationPrice = nightsNum * 32;
            } else if (dates === "28-31") {
                vacationPrice = nightsNum * 39;
            }
            break;
        case "Germany":
            if (dates === "21-23") {
                vacationPrice = nightsNum * 32;
            } else if (dates === "24-27") {
                vacationPrice = nightsNum * 37;
            } else if (dates === "28-31") {
                vacationPrice = nightsNum * 43;
            }
            break;
    }
    console.log(`"Easter trip to ${destination} : ${vacationPrice.toFixed(2)} leva."`);
}
solve("Italy",
    "21-23",
    "7"
    );