function solve(intelect, strenght, gender) {
    intelect = Number(intelect);
    strenght = Number(strenght);

    if (intelect >= 80 && strenght >= 80 && gender === "female") {
        console.log("Queen Bee");
    } else if (intelect >= 80) {
        console.log("Repairing Bee");
    } else if (intelect >= 60) {
        console.log("Cleaning Bee");
    } else if (strenght >= 80 && gender === "male") {
        console.log("Drone Bee");
    } else if (strenght >= 60) {
        console.log("Guard Bee");
    } else {
        console.log("Worker Bee");
    }
}
solve("82",
    "81",
    "female");