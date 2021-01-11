function solve(budget, season) {

    budget = Number(budget);
    let destination = "";
    let accomodation = "";
    let price = 0;
    if (budget <= 100) {
        destination = "Bulgaria";
        if (season === "summer") {
            accomodation = "Camp";
            price = budget * 0.3;
        } else {
            accomodation = "Hotel"
            price = budget * 0.7;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        if (season === "summer") {
            accomodation = "Camp";
            price = budget * 0.4;
        } else {
            accomodation = "Hotel";
            price = budget * 0.8;
        }
    } else {
        destination = "Europe";
        accomodation = "Hotel";
        price = budget * 0.9;
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${accomodation} - ${price.toFixed(2)}`);
} 
solve("1500", "summer");