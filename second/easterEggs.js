function solve(input) {
    let num = Number(input[0]);
    let index = 1;
    let color = input[index++];
    let redEggs = 0;
    let orangeEggs = 0;
    let blueEggs = 0;
    let greenEggs = 0;
    for (let i = num; i > 0; i--) {
        if (color === "red") {
            redEggs++;
        } else if (color === "orange") {
            orangeEggs++;
        } else if (color === "blue") {
            blueEggs++;
        } else {
            greenEggs++;
        }
        color = input[index++];
    }
    console.log(`Red eggs: ${redEggs}`);
    console.log(`Orange eggs: ${orangeEggs}`);
    console.log(`Blue eggs: ${blueEggs}`);
    console.log(`Green eggs: ${greenEggs}`);
    if (redEggs > orangeEggs) {
        console.log(`Max eggs: ${redEggs} -> red`);
    } else if (orangeEggs > blueEggs) {
        console.log(`Max eggs: ${orangeEggs} -> orange`);
    } else if (blueEggs > greenEggs) {
        console.log(`Max eggs: ${blueEggs} -> blue`);
    } else if (greenEggs > redEggs) {
        console.log(`Max eggs: ${greenEggs} -> green`);
    }
}
solve(["4",
    "blue",
    "red",
    "blue",
    "orange"]);