function solve (input) {
    let climbersGroups = Number(input[0]);
    let index = 1;
    let peopleCount = Number(input[index++]);
    let allPeople = 0;
    let musalaCount = 0;
    let monblanCount = 0;
    let kilimandjaroCount = 0;
    let k2Count = 0;
    let everestCount = 0;
    for (let i = 0; i < climbersGroups; i++) {
        allPeople += peopleCount;

        if (peopleCount <= 5) {
            musalaCount += peopleCount;
            peopleCount = Number(input[index++]);
        } else if (peopleCount > 5 && peopleCount <= 12) {
            monblanCount += peopleCount;
            peopleCount = Number(input[index++]);
        } else if (peopleCount > 12 && peopleCount <= 25) {
            kilimandjaroCount += peopleCount;
            peopleCount = Number(input[index++]);
        } else if (peopleCount > 25 && peopleCount <= 40) {
            k2Count += peopleCount;
            peopleCount = Number(input[index++]);
        } else if (peopleCount > 40){
            everestCount += peopleCount;
            peopleCount = Number(input[index++]);
        }
    }
    console.log(`${((musalaCount / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((monblanCount / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((kilimandjaroCount / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((k2Count / allPeople) * 100).toFixed(2)}%`);
    console.log(`${((everestCount / allPeople) * 100).toFixed(2)}%`);
}
solve(["5",
    "25",
    "41",
    "31",
    "250",
    "6"]);