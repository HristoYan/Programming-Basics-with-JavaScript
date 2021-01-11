function solve(fuel, consumptionForTour, tours) {

    fuel = Number(fuel);
    consumptionForTour = Number(consumptionForTour);
    tours = Number(tours);
    let sum = 0;
    let rounds = 0;
    for (let i = 1; i <= tours; i++) {

        sum = sum + consumptionForTour;
        consumptionForTour = consumptionForTour - 0.1; 
        if (fuel >= sum) {
            rounds++;
        }
    } 
    if (fuel >= sum) {
        console.log("Congrats! You won the race!");
    } else {
        console.log(`You are out of fuel in round ${rounds}!`);
    }
}
solve("70", "6.5", "10");